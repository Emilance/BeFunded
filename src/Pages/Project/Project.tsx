import AboutP from "./AboutP";
import Videosection from "./Videosection";
import "./Project.css"
import Details from "./Details";
import Header from "../../component/header/Header";

const Project = () => {
    return ( 
        <div className="project">
            <Header/>
            <Videosection/>
            <AboutP/>
            <Details/>
        </div>
     );
}
 
export default Project;