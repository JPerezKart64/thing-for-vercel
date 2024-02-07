import {NavLink} from 'react-router-dom'
import './index.scss'

const Sidebar = () => (
    <div className='navbar'>
        <nav>
            <NavLink exact="true"
                     activeclassname="active"
                     to="/">
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="about-link"
                to="/about">
            </NavLink>
            <NavLink
                exact="true"
                activeclassname="active"
                className="contact-link"
                to="/contact">
            </NavLink>
        </nav>
    </div>
)

export default Sidebar
