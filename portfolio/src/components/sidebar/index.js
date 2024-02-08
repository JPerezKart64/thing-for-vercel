import {NavLink} from 'react-router-dom'
import './index.scss'
import {
    faDiscord, 
    faGithub,
    faLinkedin,
    faYoutube
} from '@fortawesome/free-brands-svg-icons'

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
        <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/jfmperez/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/JPerezKart64"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@JFMPerez19"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        </ul>
    </div>
)

export default Sidebar
