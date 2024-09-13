import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../library/firebase";

const Login = () => {

    const [avatar, setAvatar] = useState({
        file: null,
        url:""
    })

    const handleAvatar = e =>{
        if(e.target.files[0]){
            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            }) 
        }
    }

    const handleLogin = e=>{
        e.preventDefault()
       // toast.warn("Ops, you dont have an account");
       // toast.success("Welcome Back buddy!");
       //toast.error("Oh no, there is an error");
    };

    const handleRegister = async e=>{ //async function because we are making a db request
        e.preventDefault()

        const formData = new FormData(e.target); //e.target passed to represnt the form

        const { username, email, pass } = Object.fromEntries(formData);

        //console.log(username, email)

        try{

            const res = await createUserWithEmailAndPassword(auth, email, pass)
        }
        
        catch(err){
                console.log(err)
                toast.error(err.message)
            }
    };

    return (
        <div className='login'>
            <div className="item">
                <h2> Hello, Welcome Back </h2>
                <form onSubmit={handleLogin}> {/* to see if user has registered an acocount, sends a notidication */}
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="pass" />
                    <button> Log in </button>
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
                    <button> Register </button>
                </form>
            </div>
        </div>
    );
};

export default Login;


