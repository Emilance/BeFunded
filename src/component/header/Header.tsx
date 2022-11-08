import "./header.css"
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = () => {
        navigate('/signup')
    }
    
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
            <div className="btncontainer">
                <button className="btn" onClick={handleLogin}>
                    Login
                </button>
                <button className="btn primary-btn" onClick={handleRegister}>
                    Register
                </button>
            </div>
        </div>
     );
}
 
export default Header;