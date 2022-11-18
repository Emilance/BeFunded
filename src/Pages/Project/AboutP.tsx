
import {FaLinkedin, FaFacebookSquare} from "react-icons/fa"
import {SiTwitter} from "react-icons/si"
import { Link } from "react-router-dom";
import "./about.css"

const AboutP = ({product}: any) => {
    return ( 
        <div className="aboutp">
            <div className="aleft">
            <h3>{`About ${product.product_name}`}</h3>
            <p>{product.product_pitch}</p>
             <p>Website: <a href="#">{product.product_website}</a></p>
             <p>Demo: <a href="#">app.e-vamp.learn</a></p>
             <p>share
                <FaLinkedin className="ico" color="#0A66C2" size="1rem"/>
                <FaFacebookSquare className="ico" color="#1877F2" size="1rem"/>
                <SiTwitter className="ico" color="#55ACEE" size="1rem"/>
             </p>
        </div>
        <div className="aright">
             <div className="sub">
                <p>Amount Raised</p>
                <h3>{`$${product.investment_raised}`}</h3>
             </div>
             <div className="sub">
                <p>Total Investor</p>
                <h3>{product.total_investors}</h3>
             </div>
             <div className="sub">
                <p>minimum/Investor</p>
                <h3>{`$${product.amount_per_investors}`}</h3>
             </div>
             <div className="sub">
                <p>Total Investment</p>
                <h3>{`$${product.investment_amount}`}</h3>
             </div>
             <button className="s1btn">
                I want to invest but I dont have the minimum
             </button>

               <Link className="sbtn" to="/invest">

                 INVEST IN E-vamp
               </Link>
        </div>
        </div>
     );
}
 
export default AboutP;