import {Outlet} from 'react-router-dom'
import Sidebar from "../sidebar"
import literallyMe from "../jacobperez.jpg"
import "./index.scss"

const Layout = () => {
    return <div className="App">
            <img src={literallyMe} className="myself"  alt="image"/>
        <Sidebar />
        <div className="Page">
            <Outlet />
        </div>
    </div>
}

export default Layout