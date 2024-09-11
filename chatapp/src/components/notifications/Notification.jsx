import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//we dont need a css file for this since we have the css for toast which we install in the terminal

const Notification = () => {

    return (
        <div className='notifiy'>
            <ToastContainer position="bottom-right" />
        </div>
    );
};

export default Notification;