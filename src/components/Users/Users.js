import { useEffect, useState } from "react";
import { Loader } from "../UI/Loader/Loader";
import { UserDetail } from "./UserDetail"
import { UsersList } from "./UsersList"

export const Users = () => {
    const[users,setUsers] = useState([]);
    const[currUser,setCurrUser] = useState(0);
    useEffect(() => {
        const getUsers = async() => {
            setTimeout(async() => {
                const response = await fetch('http://localhost:3001/users');
                const data = await response.json();
                setUsers(data);
            },1000)
        }
        getUsers();
    },[]);
    if(!users.length){
        return <Loader />
    }
    const user = users[currUser];
    return (
        <div className="container">
            <div className="Block">
                <UsersList 
                    users={users}
                    currUser={currUser} 
                    setCurrUser={setCurrUser}/>
                <UserDetail user={user}/>
            </div>
        </div>
    )
}