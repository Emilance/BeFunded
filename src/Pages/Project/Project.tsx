import AboutP from "./AboutP";
import Videosection from "./Videosection";
import "./Project.css"
import Details from "./Details";
import Header from "../../component/header/Header";
import Footer from "../../component/footer/Footer";

const Project = () => {
    return ( 
        <div className="project">
            <Header/>
            <Videosection/>
            <AboutP/>
            <Details/>
            <Footer/>

        </div>
     );
}
 
export default Project;