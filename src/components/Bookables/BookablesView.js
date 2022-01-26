import { useState } from "react"
import { BookableDetail } from "./BookableDetail"
import { BookablesList } from "./BookablesList"


export const BookablesView = () => {
    const[bookable,setBookable] = useState(null);
    
    return (
        <div className="Block">
            <BookablesList isBookable = {true} bookable={bookable} setBookable={setBookable}/>
            <BookableDetail bookable={bookable}/>
        </div>
    )
}