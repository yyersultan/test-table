import { createBookable } from '../../utils/api';
import { BookablesForm } from './BookablesForm';

export const BookableNew = () => {
    
    const onCreateBookable = (form) => {
        createBookable(form)
        .then(() => {
            alert('Booakble created Successful');
        })
    }
    return <>
        <BookablesForm onSubmit={onCreateBookable}/>
    </>
}