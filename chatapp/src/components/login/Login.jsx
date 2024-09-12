import { useState } from "react";
import "./login.css";
import { toast } from "react-toastify";

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

    return (
        <div className='login'>
            <div className="item">
                <h2> Hello, Welcome Back </h2>
                <form onSubmit={handleLogin}> {/* to see if user has registered an acocount, sends a notidication */}
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button> Log in </button>
                </form>
            </div>
            <div className="separator"></div>
            <div className="item">
            <h2> Connect with people </h2>
                <form> 
                    <label htmlFor="file">
                        <img src= {avatar.url || "./avatar.png"} alt=""/>
                        Upload Image 
                    </label>
                    <input type="file" id="file" style={{display: "none"}} onChange={handleAvatar}/>
                    <input type="text" placeholder="Username" name="username" />
                    <input type="text" placeholder="Email" name="email" />
                    <input type="password" placeholder="Password" name="password" />
                    <button> Register </button>
                </form>
            </div>
        </div>
    );
};

export default Login;


