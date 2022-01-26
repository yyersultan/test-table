import { useEffect, useState } from "react";
import { useParams,useHistory } from "react-router-dom"
import { deleteBookable, editBookable, getBookable } from "../../utils/api";
import { Loader } from "../UI/Loader/Loader";
import { BookablesForm } from "./BookablesForm";

export const BookablesEdit = () => {
    const { id } = useParams();
    const history = useHistory();

    const[bookable,setBookable] = useState(null);
    useEffect(() => {
        getBookable(id)
        .then(bookable => setBookable(bookable));
    },[id]);

    const onEditBookable = (form) => {
        editBookable(id,form)
        .then(() => {
            alert('Updated');
            history.push('/bookables')
        }).catch(() => {
            throw new Error('Some problems in fetch')
        })
    }
    const onDeleteBookable = () => {
        deleteBookable(id)
        .then(() => {
            alert('Bookable deleted successfull')
            history.push('/bookables')
        });
    }

    if(!bookable){
        return <Loader />
    }
    return (
        <div>
            <BookablesForm 
                bookables={bookable} 
                onSubmit={onEditBookable}
                handleDelete={onDeleteBookable}
                />
        </div>
)}