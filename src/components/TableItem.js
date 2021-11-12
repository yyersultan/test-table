import { Button, Checkbox, TableCell, TableRow } from "@mui/material"
import { Link } from "react-router-dom"



export const TableItem = ({user,onDeleteItem,onUserSelected,selected}) => {
    const onDelete = () => {
        onDeleteItem(user.id)
    }
    const handleClick = (e) => {
        onUserSelected(e.target.checked,user.id);
    }
    console.log(selected);
    const isSelected = selected.includes(user.id);
    return (
        <TableRow hover selected = {isSelected}>
            <TableCell><Checkbox checked = {isSelected} onChange = {handleClick}/></TableCell>
            <TableCell >{user.id}</TableCell>
            <TableCell>
                
                <Link to = {`/user/${user.id}`}>
                    <Button 
                        color={'secondary'} 
                        size ={'small'} 
                        variant = {'contained'}>
                        More details
                    </Button>
                </Link> 
            </TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.website}</TableCell>
            <TableCell> 
                <Button 
                    size = {'small'}
                    onClick = {onDelete}
                    variant = {'contained'} 
                    color ={'error'}
                >Delete</Button> 
            </TableCell>
        </TableRow>
    )
}