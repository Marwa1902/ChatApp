import "./addingUser.css";
import { db } from "../../../../library/firebase";
import { arrayUnion, collection, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where, doc } from "firebase/firestore";
import { useState } from "react";
import { useUserStore } from "../../../../library/userStore";
//addinguser will be a supcomponent of chatlist

const AddingUser = () => {
    const [user, setUser] = useState(null);
    const {currentUser} = useUserStore()

    const handleSearch = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const username = formData.get("username");

        try{
            const userRef = collection(db, "users");

            const q = query(userRef, where("username", "==", username));

            const querySnapShot = await getDocs(q)

            if(!querySnapShot.empty){
                setUser(querySnapShot.docs[0].data());
            }
        }

        catch(err){
            console.log(err)
        }
    }

    const handleAdd = async () => {
        if (!user) return;
    
        const chatRef = collection(db, "chats");
        const userChatsRef = collection(db, "userchats");
    
        try {
            const newChatRef = doc(chatRef);  // Create a new document reference
            console.log("New chat doc reference created:", newChatRef.id);  // Debugging step
    
            await setDoc(newChatRef, {
                createdAt: serverTimestamp(),
                messages: [],
            });
    
            console.log("Chat document created successfully!");
    
            // Update the userChats for both users
            await updateDoc(doc(userChatsRef, user.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: currentUser.id,
                    updatedAt: Date.now(),
                }),
            });
    
            await updateDoc(doc(userChatsRef, currentUser.id), {
                chats: arrayUnion({
                    chatId: newChatRef.id,
                    lastMessage: "",
                    receiverId: user.id,
                    updatedAt: Date.now(),
                }),
            });
    
            console.log("User chat lists updated successfully!");
        } catch (err) {
            console.log("Error in handleAdd function:", err);
        }
    };
    

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
                <button onClick={handleAdd}> Add User </button>
            </div> }
        </div>
    )
}

export default AddingUser;