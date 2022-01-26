import {useState,useEffect} from 'react'
import '../UI/Loader/Loader';
import { Loader } from '../UI/Loader/Loader';

export const UserPicker = () => {
    const[state,setState] = useState({
        users:[],
        error : false,
        loading: true
    });
    useEffect(() => {
        fetch('http://localhost:3001/users')
        .then(response => response.json())
        .then(data => setState({...state,users: data}))
        .catch(() => setState({
            ...state,
            error: true,
            loading: false
        }))
    },[]);

    if(state.error){
        return <div></div>
    }

    if(state.loading){
        return <Loader />
    }
    return (
        <div>
            <select>
                { state.users.map(u => (
                    <option key={u.notes}>{u.name}</option>
                ))}
            </select>
        </div>
    )
}