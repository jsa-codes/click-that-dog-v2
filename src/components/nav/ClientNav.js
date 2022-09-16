import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const ClientNav = () => {
    const navigate = useNavigate()



    return (
        <ul className="navbar">
            
            <img src='http://www.erblicken.com/wp-content/uploads/2016/06/Funny_Jack2.jpg' alt='dog smiling'/>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/trainingSessionForm">New Session</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/trainingSessions">All Sessions</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/trainers">Trainers</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/profileForm">Profile</Link>
            </li>
            
            {
                localStorage.getItem("click_that_dog_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("click_that_dog_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }

        </ul>
    )
}

/* 
======================================================================
* NOTES
❓ - WHAT DOES THE "onClick" DO?
The onClick is removing, from localStorage, an item called "honey_user" and then redirecting the user back the base route ("/") of the application
*/
