import { addDays, shortISO } from "../../utils/date-wrangler";
import {sessions as sessionNames} from '../../static.json'

export function getGrid(bookable,startDate) {
    const dates = bookable.days.sort().map(
        d => shortISO(addDays(startDate,d))
    ) // HERE LIST OF DATES [2021-04-23, ...]

    const sessions = bookable.sessions.map(i => sessionNames[i]); // ['Breakfast','afernoon'];

    const grid = {};
    sessions.forEach(session => {
        grid[session] = {};
        dates.forEach(date => grid[session][date] = {
            session,
            date,
            bookableId: bookable.id,
            title: "" 
        });
    });
    console.log(grid);
    return {
        grid,
        dates,
        sessions
    }
    // THIS FUNCTION RETURNS { 'Morning' : { '2020-03-22': { session: 'Morning',date: '2020-03-22',bookableId:2,title:'' } } }
}
export function transformBookings (bookingsArray) {
    return bookingsArray.reduce((bookings, booking) => {
  
      const {session, date} = booking;
  
      if (!bookings[session]) {
        bookings[session] = {};
      }
  
      bookings[session][date] = booking;
  
      return bookings;
    }, {});
  }