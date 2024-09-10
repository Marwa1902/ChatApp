import Chat from "./components/chats/Chat";
import Detail from "./components/details/Detail";
import List from "./components/lists/List";

const App = () => {
  return (
    <div className='container'>
      <List/> {/* containts the names of the messegers */}
      <Chat/>  {/* containts the chats between users */}
      <Detail/>  {/* containts the necessary details */}
    </div>
  )
}

export default App