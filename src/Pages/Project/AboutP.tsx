
import {FaLinkedin, FaFacebookSquare} from "react-icons/fa"
import {SiTwitter} from "react-icons/si"
import { Link } from "react-router-dom";
import "./about.css"

const AboutP = () => {
    return ( 
        <div className="aboutp">
            <div className="left">
            <h3>About E-Vamp</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.</p>
             <p>Website: <a href="#">www.e-vamp.com</a></p>
             <p>Demo: <a href="#">app.e-vamp.learn</a></p>
             <p>share
                <FaLinkedin className="ico" color="#0A66C2" size="1rem"/>
                <FaFacebookSquare className="ico" color="#1877F2" size="1rem"/>
                <SiTwitter className="ico" color="#55ACEE" size="1rem"/>
             </p>
        </div>
        <div className="right">
             <div className="sub">
                <p>Amount Raised</p>
                <h3>$200000</h3>
             </div>
             <div className="sub">
                <p>Total Investor</p>
                <h3>Unlimited</h3>
             </div>
             <div className="sub">
                <p>minimum/Investor</p>
                <h3>$50, 000</h3>
             </div>
             <div className="sub">
                <p>Total Investment</p>
                <h3>$100, 000</h3>
             </div>
             <button className="s1btn">
                I want to invest but I dont have the minimum
             </button>

             <button className="sbtn">
               <Link to="/invest">

                 INVEST IN E-vamp
               </Link>
             </button>
        </div>
        </div>
     );
}
 
export default AboutP;