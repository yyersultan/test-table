import { useState } from "react"
import {BookablesList} from '../Bookables/BookablesList'
import { Bookings } from "./Bookings";

export const BookingPage = () => {
    const[bookable,setBookable] = useState(null);

    return (
        <div className="container2">
            <div className="Block ">
                <BookablesList 
                    bookable={bookable} 
                    setBookable={setBookable}/>
                <Bookings bookable = {bookable}/>
            </div>
        </div>
    )
}