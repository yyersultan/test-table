import { NavLink } from "react-router-dom"
import { UserPicker } from "../Users/UserPicker"

export const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li> <NavLink to={'/bookings'}>Booking</NavLink> </li>
                <li><NavLink to={'/bookables'}>Bookables</NavLink></li>
                <li><NavLink to={'/users'}>Users</NavLink> </li>
                <li><NavLink to={'/'}>Game</NavLink></li>
                <li><NavLink to={'/wordle'}>Wordle </NavLink></li>

            </ul>
            
        </nav>
    )
}