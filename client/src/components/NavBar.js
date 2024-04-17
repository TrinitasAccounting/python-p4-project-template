import { NavLink } from "react-router-dom";

import './All.css';

function NavBar() {
    return (
        <nav >
            <NavLink to='/' className='nav-bar-headers'>Home</NavLink>
            <NavLink to='/add_player' className='nav-bar-headers'>Add Players</NavLink>
            <NavLink to='/teams' className='nav-bar-headers'>Teams</NavLink>
            <NavLink to='/add_team' className='nav-bar-headers'>Add Teams</NavLink>
            <NavLink to='/coaches' className='nav-bar-headers'>Greatest Coaches</NavLink>

        </nav>
    )
};

export default NavBar;