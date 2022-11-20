import "./header.css"
import { Link, useNavigate } from 'react-router-dom'
import {AiOutlineDown} from "react-icons/ai"
import {useEffect} from "react"
import { getUser } from "../../auth"
import ProfileBar from "../../Pages/Investors/Dashboard/DashboardHeader"
import {GiHamburgerMenu}  from "react-icons/gi"
import {ImCross} from "react-icons/im"
import {useState} from "react"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    const [openBugger, setOpenBugger] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        AOS.init( {duration:500});
      }, [])
    const handleLogin = () => {

        navigate('/login')
    }

    const handleRegister = () => {
        navigate('/signup')
    }
    
      const  user = getUser()
    const open = <ImCross
                   onClick={()=> setOpenBugger(false)}
                      size="1.5rem" className="bugger" />
    const close =<GiHamburgerMenu 
                      onClick={()=> setOpenBugger(true)}
                       size="1.7rem" className="bugger" />
    return ( 
        <div className="header">
            <div className="logo">
               {openBugger ? open : close}
               <Link to="/">
              <h1 className="title">Be<span>Funded</span></h1>
               </Link>
            </div>
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
   {openBugger   &&
   
   
   
           <nav data-aos="fade-right" className="mobileNav">
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
                    {user.name ?
                     
                     <ProfileBar user={user} />
              :
             
                 <div className="btncontainer mobile">
                     <button className="btn" onClick={handleLogin}>
                         Login
                     </button>
                     <button className="btn primary-btn" onClick={handleRegister}>
                         Register
                     </button>
                 </div>
                 
             }
                </ul>
            </nav>
   
   }

        </div>
     );
}
 
export default Header;