import { useState } from "react"
import "./chat.css"
import EmojiPicker from "emoji-picker-react"
const Chat = () => {
    const [open, setOpen] = useState(false); //this is for the emoji
    const [text, setText] = useState("");

    //function to handle emoji picking and making it appear on the placeholder for typing
    const handleEmoji = e =>{
        //console.log(e)
        setText((prev) => prev + e.emoji);
        setOpen(false);
    }

    //console.log(text);

    return (
        <div className='chat'>
            <div className='top'>
                <div className="user">
                    <img src="./avatar.png" alt=""/>
                    <div className="texts">
                        <span> Marwa </span>
                        <p> السلام عليكم , how are oyu hope you are foing well</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div> 
            <div className='center'></div>
            <div className='bottom'>
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Type here ..." 
                value={text}
                onChange={e=>setText(e.target.value)} />
                <div className="emoji">
                    <img src="./emoji.png" alt=""
                        onClick={() => setOpen((prev) => !prev)}
                    />

                    <div className="epicker">
                        <EmojiPicker open = {open} onEmojiClick={handleEmoji}/>
                    </div>
                </div>
                <button className="sendBtn"> Send </button>
            </div>
        </div>
    )
}

export default Chat