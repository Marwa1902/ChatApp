import { useEffect, useRef, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../library/firebase";
import { useChatStore } from "../../library/chatStore";

const Chat = () => {
    const [open, setOpen] = useState(false); //this is for the emoji
    const [chat, setChat] = useState(); //this is for the chat
    const [text, setText] = useState("");

    const { chatId } = useChatStore();

    //endRef used for automic scroll to last message in a chat when refreshed
    const endRef = useRef(null)

    useEffect(() => {
        endRef.current?.scrollIntoView({behavior: "smooth"});

    }, []);

    useEffect(() => {
        const unSub = onSnapshot(doc(db, "chats", chatId), (res) =>{
            setChat(res.data())
        });

        return () => {
            unSub();
        }
    }, [chatId]);

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
            <div className='center'>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                        Wake up to reality! Nothing ever goes as planned in this accursed world. 
                        The longer you live, the more you realize that 
                        the only things that truly exist in this reality are merely pain.
                        suffering and futility. 
                        Listen, everywhere you look in this world,
                        wherever there is light, there will always be shadows to be found 
                        as well. As long as there is a concept of victors, 
                        the vanquished will also exist. 
                        The selfish intent of wanting to preserve peace, initiates war. 
                        and hatred is born in order to protect love. 
                        There are nexuses causal relationships that cannot be separated 
                        - Madara Uchiha,
                        </p>
                        <span> 1 min ago </span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>
                        Wake up to reality! Nothing ever goes as planned in this accursed world. 
                        The longer you live, the more you realize that 
                        the only things that truly exist in this reality are merely pain.
                        suffering and futility. 
                        Listen, everywhere you look in this world,
                        wherever there is light, there will always be shadows to be found 
                        as well. As long as there is a concept of victors, 
                        the vanquished will also exist. 
                        The selfish intent of wanting to preserve peace, initiates war. 
                        and hatred is born in order to protect love. 
                        There are nexuses causal relationships that cannot be separated 
                        - Madara Uchiha,
                        </p>
                        <span> 1 min ago </span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                        Wake up to reality! Nothing ever goes as planned in this accursed world. 
                        The longer you live, the more you realize that 
                        the only things that truly exist in this reality are merely pain.
                        suffering and futility. 
                        Listen, everywhere you look in this world,
                        wherever there is light, there will always be shadows to be found 
                        as well. As long as there is a concept of victors, 
                        the vanquished will also exist. 
                        The selfish intent of wanting to preserve peace, initiates war. 
                        and hatred is born in order to protect love. 
                        There are nexuses causal relationships that cannot be separated 
                        - Madara Uchiha,
                        </p>
                        <span> 1 min ago </span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                        <p>
                        Wake up to reality! Nothing ever goes as planned in this accursed world. 
                        The longer you live, the more you realize that 
                        the only things that truly exist in this reality are merely pain.
                        suffering and futility. 
                        Listen, everywhere you look in this world,
                        wherever there is light, there will always be shadows to be found 
                        as well. As long as there is a concept of victors, 
                        the vanquished will also exist. 
                        The selfish intent of wanting to preserve peace, initiates war. 
                        and hatred is born in order to protect love. 
                        There are nexuses causal relationships that cannot be separated 
                        - Madara Uchiha,
                        </p>
                        <span> 1 min ago </span>
                    </div>
                </div>

                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                        Wake up to reality! Nothing ever goes as planned in this accursed world. 
                        The longer you live, the more you realize that 
                        the only things that truly exist in this reality are merely pain.
                        suffering and futility. 
                        Listen, everywhere you look in this world,
                        wherever there is light, there will always be shadows to be found 
                        as well. As long as there is a concept of victors, 
                        the vanquished will also exist. 
                        The selfish intent of wanting to preserve peace, initiates war. 
                        and hatred is born in order to protect love. 
                        There are nexuses causal relationships that cannot be separated 
                        - Madara Uchiha,
                        </p>
                        <span> 1 min ago </span>
                    </div>
                </div>

                <div className="message own">
                    <div className="texts">
                    <img src="https://preview.redd.it/what-makes-madara-uchiha-such-a-good-character-when-it-v0-316dlixm4tgc1.jpeg?auto=webp&s=b7df787f155166613508760fc26ed8544a4c35aa" alt="" />
                        <p>
                        Wake up to reality! Nothing ever goes as planned in this accursed world. 
                        The longer you live, the more you realize that 
                        the only things that truly exist in this reality are merely pain.
                        suffering and futility. 
                        Listen, everywhere you look in this world,
                        wherever there is light, there will always be shadows to be found 
                        as well. As long as there is a concept of victors, 
                        the vanquished will also exist. 
                        The selfish intent of wanting to preserve peace, initiates war. 
                        and hatred is born in order to protect love. 
                        There are nexuses causal relationships that cannot be separated 
                        - Madara Uchiha,
                        </p>
                        <span> 1 min ago </span>
                    </div>
                </div>
                <div ref={endRef}>  {/*this is for reaching end of the messages whenever the page is refreshed*/}

                </div>
            </div>
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

