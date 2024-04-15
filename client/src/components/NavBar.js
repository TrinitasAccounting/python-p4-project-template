import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/add_player'>Add Players</NavLink>
        </nav>
    )
};

export default NavBar;