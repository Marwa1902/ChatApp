import { useEffect } from "react";
import Chat from "./components/chats/Chat";
import Detail from "./components/details/Detail";
import List from "./components/lists/List";
import Login from "./components/login/login";
import Notification from "./components/notifications/Notification";
import { onAuthStateChanged } from "firebase/auth";

const App = () => {

  const user = false;

  useEffect(() =>{
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user)
    })

    return() => {
      unSub();
    }
  }, [])

  return (
    <div className='container'>
      {user ? (
        <>
        <List/> {/* containts the names of the messegers */}
        <Chat/>  {/* containts the chats between users */}
        <Detail/>  {/* containts the necessary details */}
        </>
      ) : (
        <Login/>
      )}

      <Notification/>
      
    </div>
  );
};

export default App