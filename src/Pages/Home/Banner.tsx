import { Link } from "react-router-dom";
import { getUser } from "../../auth";
import "./banner.css"

const Banner = () => {
    const user = getUser()
    return ( 
        <div className="banner">
            <h1> The easiest way to fund and bring your <span>project</span> to life</h1>
            <p>A collaborative system that enables organizations and changemakers to work together on initiatives that improve society</p>
             <div className="bimageContainer">
             <img src="/banner.png" alt="turn ideas into reality"/>
             </div>
             <h2>Find it first on<span className="brand">  Be<span>Funded</span></span></h2>
             <p>BeFunded is where investors and innovation seekers find innovative, imaginative tech, ideas and products before it hits the mainstream.</p>
          {!user.name    &&   
          
             <div className="btnContainer">
                <Link to="/signup">
                <button  className="btn primary-btn">
                    Register
                </button>
                </Link>
                <Link to="/login">
                <button className="btn">
                    Login
                </button>
                </Link>
                    
            </div>
          } 
        </div>
     );
}
 
export default Banner;