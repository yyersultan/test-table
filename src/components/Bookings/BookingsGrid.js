import { useEffect, useMemo, useState } from "react"
import { shortISO } from "../../utils/date-wrangler";
import { getGrid, transformBookings } from "./grid-builder";


export const BookingsGrid = ({week,bookable,booking,setBooking}) => {
    const[bookings,setBookings] = useState(null);
    const[error,setError] = useState(null); 

    const{grid,sessions,dates} = useMemo(
        () => bookable ? getGrid(bookable,week.start):{}
    ,[bookable,week.start]); // {'Morning':{date:{},date:{}}}, ['Morning',...],['2020-02-12',...]

    useEffect(() => {
        if(bookable){
            let doUpdate = true;
            setBookings(null);
            setError(false);
            setBooking(null);
            const start = shortISO(week.start);
            const end = shortISO(week.end)
            fetch(`http://localhost:3001/bookings?bookableId=${bookable.id}&date_gte=${start}&date_lte=${end}`)
            .then(res => res.json())
            .then(resp => {
                if(doUpdate) {
                    setBookings(transformBookings(resp))
                }
            }).catch(setError)
            return () => doUpdate = false;
        }
        
    },[week,bookable,setBooking])

    function cell (session,date) {
        const cellData = bookings?.[session]?.[date] || grid[session][date];

        const isSelected = booking?.session === session && 
        booking?.date === date;

        return (
            <td
                key={date}
                className = {isSelected ? 'selectedCell':''}
                onClick={bookings ? () => setBooking(cellData): null}
            >
                {cellData.title}
            </td>
        )
    }
    if(!grid){
        return <p>Loading ...</p>
    }
    
    return (
        <div>
            <table className={bookings ? 'bookingsGrid active':'bookingsGrid'}>
                <thead>
                    <tr>
                        <th>
                        <span className="status">
                            Spinner
                        </span>
                        </th>
                        {dates.map(d => (
                            <th key={d}>
                                {(new Date(d)).toDateString()}
                            </th>
                            ))}
                    </tr>
                </thead>
                <tbody>
                    {sessions.map(session => (
                        <tr key={session}>
                            <th>{session} </th>
                            {dates.map(date => cell(session,date))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}