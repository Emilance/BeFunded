import Header from "../../component/header/Header";
import Banner from "./Banner";
import Bigthing from "./Bigthing";
import Explore from "./Explore";
import "./Home.css"
const Home = () => {
    return ( 
        <div className="home">
         <Header/>
           <Banner/>
           <Explore/>
           <Bigthing/>
        </div>
     );
}
 
export default Home;