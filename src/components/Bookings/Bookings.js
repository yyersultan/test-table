import { WeekPicker } from "./WeekPicker";
import {useReducer, useState} from 'react'
import weekReducer from "./weekRedcuer";
import {getWeek } from '../../utils/date-wrangler'
import { BookingsGrid } from "./BookingsGrid";
import { BookingDetail } from "./BookingDetail";

export const Bookings = ({bookable}) => {
    
    const [week,dispatch] = useReducer(weekReducer,new Date(),getWeek);
    const [booking,setBooking] = useState(null); 

    return (
        <div className="Booking">
            <div>
            <WeekPicker dispatch={dispatch}/>
            <BookingsGrid 
                week={week}
                bookable={bookable}
                booking = {booking}
                setBooking={setBooking}
            />
            </div>
            <BookingDetail 
                booking = {booking}
                bookable = {bookable}
            />
            
        </div>
    )
}