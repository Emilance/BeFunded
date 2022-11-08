import Banner from "./Banner";
import Bigthing from "./Bigthing";
import Explore from "./Explore";
import "./Home.css"
const Home = () => {
    return ( 
        <div className="home">
           <Banner/>
           <Explore/>
           <Bigthing/>
        </div>
     );
}
 
export default Home;