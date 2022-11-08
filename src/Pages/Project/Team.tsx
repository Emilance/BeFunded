
import "./details.css"
import {FaLinkedin} from "react-icons/fa"

const teamMember = [
    {
        member:""
    },
    {
        member:""
    },
    {
        member:""
    },
    {
        member:""
    },
    {
        member:""
    },
    {
        member:""
    },
  
]

const Team = () => {
    return ( 
        <div className="team">
            <h3>The Team</h3>
            <div className="teamCon">
                {teamMember.map((data,i)=>{
                    return(

                        <div key={i} className="teamcard">
                            <img src="/profile.png" alt="" />
                            <h4>Selvan Adam</h4>
                            <p> founder & CEO E-vamp</p>
                            <FaLinkedin className="ico" color="#0A66C2" size="1rem"/>

                        </div>
                    )
                })}
               
            </div>
        </div>
     );
}
 
export default Team;