
import {BsClock} from "react-icons/bs"

type projectDetailsType = {
  title : string,
  description:string,
  raised: string,
  goal: string,
  img :string,
  days:string
}

const ProjectCard = (props :projectDetailsType ) => {
    const {title, description,raised, goal, days, img } = props
    return ( 
        <div className="pcard">
          <img src={img}/>
            <div className="cdetail">
                    <h3 > fundraising</h3>
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className="lowerpart">
                                <div className="rightc">
                                        <div className="stat">
                                            <p>Raise so Far</p>
                                            <p className="amount">{raised}</p>
                                        </div>
                                        <div className="stat">
                                            <p>GOAL</p>
                                            <p className="amount">{goal}</p>
                                        </div>
                               </div>
                                <div className="leftc">
                                        <BsClock size="1rem"/>
                                            <span>`${days} days left`</span>
                                    
                                </div>
                            
                     </div>
             </div>
                 
        </div>
    );
}
 
export default ProjectCard;