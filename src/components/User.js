import { Avatar, LinearProgress, Paper } from "@mui/material";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useEffect, useState } from "react"
import { Link, withRouter } from "react-router-dom"

const useStyles = makeStyles({
    User : {
        width : '500px',
        padding : '20px',
        display:'flex',
        justifyContent : 'space-between',
        alignItems : 'center'
    },
    Avatar : {
        width : '50px',
        height : '50px',
        color : 'orange'
    },
    userInfo : {

    }
})

const User = (props) =>{
    const classes = useStyles();
    const{id} = props.match.params;
    const[state,setState] = useState({
        user : {},
        loading : true
    })
    useEffect(() => {
        const getUser = async() => {
            try{
                const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
                console.log(response);
                setState({
                    ...state,
                    user : response.data,
                    loading : false
                })
            }catch(e){
                console.log(e);
            }
        }
        getUser()
    },[]);
    
    if(state.loading){
        return <LinearProgress /> 
    }
    const {user} = state;
    return (
        <div>
        <Link to = '/'>Main </Link><br/>
        <Paper className = {classes.User}>
            <Avatar sx={{ bgcolor: 'orange',width :'100px',height : '100px' }}> 
                {user.username[0]}
            </Avatar>
            <div className = {classes.userInfo}>
                <h4>Name  {user.name} </h4>
                <h4>Email  {user.email} </h4>
                <h4>City : {user.address.city}</h4>
                <h4>Phone : {user.phone}</h4>

            </div>
        </Paper>
        </div>
    )
}

const UserPage = withRouter(User)
export {UserPage}