
export const BookingDetail = ({booking,bookable}) => {
    return (
        <div className="BookingDetail">
            <h2 style={{marginBottom:'20px'}}>Booking Detail</h2>
            
            {booking 
            ? <div >
                <h3>Title</h3>
                <div className="detail_end">{booking.title}</div>
                <h3>Bookable</h3>
                <div className="detail_end">{bookable.title}</div>
                <h3>Booking Date</h3>
                <div className="detail_end">{booking.date}</div>
                <h3>Session</h3>
                <div className="detail_end">{booking.session}</div>
            </div> 
            : 
                <div className="">
                    Select a booking or 
                    a booking slot.
                </div>
            
            }
        </div>
    )
}