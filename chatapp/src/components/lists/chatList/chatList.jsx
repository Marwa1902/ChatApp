import { useState } from "react"
import "./chatList.css"

const ChatList = () => {
    const [addMode, setAddMode] = useState(false); //when we click the plus/add sign, the image will change to minus
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
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span> Marwa </span>
                    <p> السلام عليكم </p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span> Marwa </span>
                    <p> السلام عليكم </p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span> Marwa </span>
                    <p> السلام عليكم </p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span> Marwa </span>
                    <p> السلام عليكم </p>
                </div>
            </div>
        </div>
    )
}

export default ChatList