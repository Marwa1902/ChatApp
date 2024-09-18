import { useEffect } from "react";
import Chat from "./components/chats/Chat";
import Detail from "./components/details/Detail";
import List from "./components/lists/List";
import Login from "./components/login/login";
import Notification from "./components/notifications/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./library/firebase"
import { useUserStore } from "./library/userStore";
const App = () => {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();
  const { chatId } = useUserStore();

  useEffect(() =>{
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return() => {
      unSub();
    }
  }, [fetchUserInfo]);
  
  if(isLoading) return <div className="load"> Loading.....</div>;

  return (
    <div className='container'>
      {currentUser ? (
        <>
        <List/> {/* containts the names of the messegers */}
        {chatId && <Chat/> } {/* containts the chats between users */}
        {chatId && <Detail/> } {/* containts the necessary details */}
        </>
      ) : (
        <Login/>
      )}
      <Notification/>
    </div>
  );
};

export default App;