import { auth } from "../../library/firebase";
import "./detail.css"
const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2> Marwa ABdul Rahim</h2>
                <p> a parapraho div </p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span> Help & Privacy SETTINGS </span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span> Shared Photos </span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                    <div className="photo">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://preview.redd.it/what-makes-madara-uchiha-such-a-good-character-when-it-v0-316dlixm4tgc1.jpeg?auto=webp&s=b7df787f155166613508760fc26ed8544a4c35aa"/>
                                <span> madara.png </span>
                                <img src="./download.png" alt="" className="icon" />
                            </div>  
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://preview.redd.it/what-makes-madara-uchiha-such-a-good-character-when-it-v0-316dlixm4tgc1.jpeg?auto=webp&s=b7df787f155166613508760fc26ed8544a4c35aa"/>
                                <span> madara.png </span>
                                <img src="./download.png" alt="" className="icon"/>
                            </div>  
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://preview.redd.it/what-makes-madara-uchiha-such-a-good-character-when-it-v0-316dlixm4tgc1.jpeg?auto=webp&s=b7df787f155166613508760fc26ed8544a4c35aa"/>
                                <span> madara.png </span>
                                <img src="./download.png" alt="" className="icon"/>
                            </div>  
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="https://preview.redd.it/what-makes-madara-uchiha-such-a-good-character-when-it-v0-316dlixm4tgc1.jpeg?auto=webp&s=b7df787f155166613508760fc26ed8544a4c35aa"/>
                                <span> madara.png </span>
                                <img src="./download.png" alt="" className="icon"/>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span> Files Shared </span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span> CHAT SETTINGS </span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <button> Block user </button>
                <button> Report user </button>
                <button className="logout" onClick={() => auth.signOut()}> Log Out </button>
            </div>
        </div>
    );
};

export default Detail