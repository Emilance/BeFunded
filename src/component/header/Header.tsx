
import "./header.css"

const Header = () => {
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
                <button className="btn">
                    Login
                </button>
                <button  className="btn primary-btn">
                    Register
                </button>
            </div>
        </div>
     );
}
 
export default Header;