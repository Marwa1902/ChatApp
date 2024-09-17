import "./addingUser.css";
import { db } from "../../../../library/firebase";
import { collection, getDoc, query, where} from "firebase/firestore";
import { useState } from "react";

//addinguser will be a supcomponent of chatlist

const AddingUser = () => {

    const [user, setUser] = useState(null);

    const handleSearch = async e => {
        const formData = new FormData();
        const username = formData.get("username");

        try{
            const userRef = collection(db, "users");

            const q = query(userRef, where("username", "==", username));

            const querySnapShot = await getDoc(q)

            if(!querySnapShot.empty){
                setUser(querySnapShot.doc[0].data());
            }
        }

        catch(err){
            console.log(err)
        }
    }

    return(
        <div className="addingUser">
            <form onSubmit={handleSearch}> 
                <input type="text" placeholder="Username" name="username" />
                <button> Search </button>
            </form>
            {user && <div className="user">
                <div className="detail">
                    <img src={user.avatar || "./avatar.png"} alt="" />
                    <span> {user.username} </span>
                </div>
                <button> Add User </button>
            </div> }
        </div>
    )
}

export default AddingUser