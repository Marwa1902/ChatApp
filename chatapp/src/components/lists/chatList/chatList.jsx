import { useEffect, useId, useState } from "react"
import "./chatList.css"
import AddingUser from "./addingUser/addingUser";
import { useUserStore } from "../../../library/userStore";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../../library/firebase";

const ChatList = () => {
    const [chats, setChats] = useState([]); //when we click the plus/add sign, the image will change to minus
    const [addMode, setAddMode] = useState(false);

    const {currentUser} = useUserStore()

    useEffect(()=> {
        const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async (res) => {
            const items = res.data()
            //setChats(doc.data());

            const promises = items.map(async(item) => {
                const userDocRef = doc(db, "users", item.recieverId);
                const userDocSnap = await getDoc(docRef);

                const user = userDocSnap.data();

                return {...item, user};
            });

            const chatData = await Promise.all(promises);

            setChats(chatData.sort((a, b) => b.updatedAt = a.updatedAt));
        });

        return () => {
            unSub()
        }
    }, [currentUser.id]);
    
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="./search.png" alt=""/>
                    <input type="text" placeholder="Search" />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add"
                onClick={() => setAddMode((prev) => !prev)} //condition for line 5, if false = minus img, else plus
                /> 
            </div>
            {chats.map((chat) =>(
                <div className="item" key={chat.chatID}>
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span> Marwa </span>
                        <p> {chat.lastMessage} </p>
                    </div>
                </div>
            ) )}
            {addMode && <AddingUser/>} {/* when we click the tiny + next to search
            , the search appears on the middle of the screen because of this line of code */}
        </div>
    )
}

export default ChatList