import { Checkbox, Pagination, Paper,Table, TableBody, TableCell, 
        TableContainer, TableHead, TableRow, TableSortLabel } 
from "@mui/material"
import { TableItem } from "./TableItem"

import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    TableRoot : {
        display : 'flex',
        justifyContent : 'center',
        width:'80%',
        flexDirection:'column'
    }
})

export const TableData = ({users,onDeleteItem,sortById,page,setPage,
                            onUserSelected,selected,sortBy}) => {
    const styles = useStyles();
    const orderBy = (sortBy === 'asc'?true:false);
    const onPaginated = (e,page) => {
        setPage(page-1)
    }
    const usersList = users.slice(page*5,page*5+5);
    return (
        <div className = {styles.TableRoot}>
            <TableContainer  component = {Paper}>
                <Table  sx ={{minWidth : 700}}>
                    <TableHead>
                        <TableRow>
                            <TableCell> </TableCell>
                            <TableCell sortDirection={orderBy} onClick = {sortById}> 
                                <TableSortLabel active ={true} direction = {sortBy}> 
                                    <h3>ID</h3>
                                </TableSortLabel> 
                            </TableCell>
                            <TableCell></TableCell>
                            <TableCell ><h3>Username</h3></TableCell>
                            <TableCell><h3>Email</h3></TableCell>
                            <TableCell><h3>WebSite</h3></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            usersList.map((user,i) => {
                                return <TableItem 
                                        key = {`${user.id}&${i}`}
                                        onUserSelected = {onUserSelected}
                                        onDeleteItem = {onDeleteItem}
                                        selected = {selected}
                                        user = {user}/>
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Pagination 
                onChange = {onPaginated}
                count={Math.ceil(users.length/5)}
                />
        </div>
    )
}