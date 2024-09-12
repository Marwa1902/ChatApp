import "./addingUser.css"

//addinguser will be a supcomponent of chatlist

const AddingUser = () => {
    return(
        <div className="addingUser">
            <form> 
                <input type="text" placeholder="Username" name="username" />
                <button> Search </button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt="" />
                    <span> Marwa Al Balushi</span>
                </div>
                <button> Add User </button>
            </div>
        </div>
    )
}

export default AddingUser