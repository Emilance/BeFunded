import AboutP from "./AboutP";
import Videosection from "./Videosection";
import "./Project.css"
import Details from "./Details";

const Project = () => {
    return ( 
        <div className="project">
            <Videosection/>
            <AboutP/>
            <Details/>
        </div>
     );
}
 
export default Project;