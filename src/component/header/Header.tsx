import "./header.css"
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineDown} from "react-icons/ai"
import {useEffect} from "react"
import { getUser } from "../../auth"
import ProfileBar from "../../Pages/Investors/Dashboard/DashboardHeader"

const Header = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = () => {
        navigate('/signup')
    }
    
      const  user = getUser()
    
    
    return ( 
        <div className="header">
          
            <h1 className="title">Be<span>Funded</span></h1>
            <nav className="navBar">
                <ul >
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="#">Explore</Link>
                    </li>
                    <li>
                        <Link to="#">Start A Campaign</Link>
                    </li>
                    <li>
                        <Link to="#">Top Picks</Link>
                    </li>
                </ul>
            </nav>
            {user.name ?
                     
                <ProfileBar user={user} />
         :
        
            <div className="btncontainer">
                <button className="btn" onClick={handleLogin}>
                    Login
                </button>
                <button className="btn primary-btn" onClick={handleRegister}>
                    Register
                </button>
            </div>
            
        }
   
        </div>
     );
}
 
export default Header;