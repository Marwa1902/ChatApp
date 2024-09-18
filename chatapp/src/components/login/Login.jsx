import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../library/firebase";
import { doc, setDoc } from "firebase/firestore";
import upload from "../../library/upload";

const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url:""
    });

    const [loading, setLoading] = useState(false)

    const handleAvatar = e =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            }) 
        }
    }

    const handleRegister = async e=>{ //async function because we are making a db request
        e.preventDefault()
        setLoading(true)

        const formData = new FormData(e.target); //e.target passed to represnt the form

        const { username, email, pass } = Object.fromEntries(formData);

        //console.log(username, email)

        try{

            const res = await createUserWithEmailAndPassword(auth, email, pass) //creating new user
            const imgURL = await upload(avatar.file) //for profile picture

            await setDoc(doc (db, "users", res.user.uid), { //adding the new user to the db
                username,
                email,
                avatar: imgURL,
                id: res.user.uid,
                blocked: [],


            });

            await setDoc(doc (db, "userchats", res.user.uid), { //adding the chat to db
                chats: [], 
            });

            toast.success("Hurray! Account created, you can login")
        }
        
        catch(err){
                console.log(err)
                toast.error(err.message)
            }

            finally{
                setLoading(false);
            }
    };

    const handleLogin = async (e)=>{
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target); //e.target passed to represnt the form
        const {email, pass } = Object.fromEntries(formData);
       // toast.warn("Ops, you dont have an account");
       // toast.success("Welcome Back buddy!");
       //toast.error("Oh no, there is an error");

        try{
            await signInWithEmailAndPassword(auth, email, pass);
        }

        catch(err){
        console.log(err);
        toast.error(err.message);
        }

        finally{
            setLoading(false);
        }
    };
    return (
        <div className='login'>
            <div className="item">
                <h2> Hello, Welcome Back </h2>
                <form onSubmit={handleLogin}> {/* to see if user has registered an acocount, sends a notidication */}
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="pass" />
                    <button disabled = {loading}> {loading ? "Loading" : "Log in"}  </button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
            <h2> Connect with people </h2>
                <form onSubmit={ handleRegister }> 
                    <label htmlFor="file">
                        <img src= {avatar.url || "./avatar.png"} alt=""/>
                        Upload Image 
                    </label>
                    <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="pass" />
                    <button disabled = {loading}> {loading ? "Loading" : "Register"} </button>
                </form>
            </div>
        </div>
    );
};

export default Login;


