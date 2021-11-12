import axios from "axios";
import { useEffect, useState } from "react";
import { TableData } from "./components/TableData";
import classes from './App.module.css';
import { Route } from "react-router-dom";
import { UserPage } from "./components/User";
import { LinearProgress } from "@mui/material";

function App() {
  const[state,setState] = useState({
    users : [],
    selected : [],
    loading : true,
    error : null,
    page : 0,
    sort : 'asc'
  })
  useEffect(() => {
    const getUsers = async() => {
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log(response.data);
        setState({
          ...state,
          users : response.data,
          loading : false
        })
      }catch(e){
        setState({
          ...state,
          error : e.message
        })
      }
    }
    getUsers();
    // eslint-disable-next-line
  },[]);

  const setPage = (page) => {
    setState({
      ...state,
      page
    })
  }

  const onDeleteItem = (id) => {
    setState({
      ...state,
      users : state.users.filter(el => el.id !== id)
    });
  }

  const sortById = () => {
    if(state.sort === 'asc'){
      setState({
        ...state,
        users : state.users.sort((a,b) => parseInt(b.id) - parseInt(a.id)),
        sort : 'desc'
      })
    }else{
      setState({
        ...state,
        users : state.users.sort((a,b) => parseInt(a.id) - parseInt(b.id)),
        sort : 'asc'
      })
    }
    
  }

  const onUserSelected = (checked,id) =>{
    if(checked){
      setState({
        ...state,
        selected : [...state.selected,id]
      })
    }else{
      
      if(state.selected.length > 1){
        
        setState({
          ...state,
          selected : state.selected.filter(el => el !== id)
        })
      }
    }
  }

  if(state.loading){
    return <LinearProgress />
  }
 
  return (
    <div className = {classes.App}>
      
        <Route exact path = "/" render = {
          () => <TableData 
                  sortById = {sortById}
                  setPage = {setPage}
                  page = {state.page}
                  sortBy = {state.sort}
                  selected = {state.selected}
                  onUserSelected = {onUserSelected}
                  onDeleteItem = {onDeleteItem} 
                  users = {state.users}/>}/>
        
       
        <Route path = "/user/:id" render = {
          () => <UserPage />
        }/>
      
    </div>
  );
}

export default App;
