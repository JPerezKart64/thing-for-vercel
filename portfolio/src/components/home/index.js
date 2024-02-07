import {Link} from "react-router-dom"
import "./index.scss"

const Home = () => {
    return (
        <div className="container home">
            <div className="text">
                <h1>Hey, <br/> I'm Jacob Perez
                <br/>
                    Undergrad CS Major
                </h1>
                <h2>Backend Developer / Github Master</h2>
                <Link to="/contact" className="flat-button">
                    CONTACT ME
                </Link>
            </div>
        </div>
    );
}

export default Home