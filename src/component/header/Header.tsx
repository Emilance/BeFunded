import "./header.css"
import { useNavigate } from 'react-router-dom'

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
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Explore</a>
                    </li>
                    <li>
                        <a href="#">Start A Campaign</a>
                    </li>
                    <li>
                        <a href="#">Top Picks</a>
                    </li>
                </ul>
            </nav>
            <div className="btnContainer">
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