
import {BsArrowRightCircle, BsArrowLeftCircle}  from "react-icons/bs"
import ProjectCard from "../../Home/ProjectCard"
import "../../Home/explore.css"
import "./lower.css"
const projects = [

    {
        name :"EdTech startUp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eligendi! Excepturi, corrupti.",
        raised: "100,000",
        goal:"1,000,000",
        days: "30",
        img: "/project1.png",
        link :"/project"
    },
    {
        name :"Metaverse Headset",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eligendi! Excepturi, corrupti.",
        raised: "100,000",
        goal:"1,000,000",
        days: "30",
        img: "/project2.png",
        link :"/project"
    },
    {
        name :"EdTech startUp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eligendi! Excepturi, corrupti.",
        raised: "100,000",
        goal:"1,000,000",
        days: "30",
        img: "/banner.png",
        link :"/project"
    },
    {
        name :"EdTech startUp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eligendi! Excepturi, corrupti.",
        raised: "100,000",
        goal:"1,000,000",
        days: "30",
        img: "/project3.png",
        link :"/project"
    },
    {
        name :"Metaverse Headset",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eligendi! Excepturi, corrupti.",
        raised: "100,000",
        goal:"1,000,000",
        days: "30",
        img: "/banner.png",
        link :"/project"
    },
    {
        name :"Marketing Institution",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, eligendi! Excepturi, corrupti.",
        raised: "100,000",
        goal:"1,000,000",
        days: "30",
        img: "/project2.png",
        link :"/project"
    },

]
const Lowerdash = () => {
    const scrollHandler= (direction: string)=>{
   
        var TestCon = document.querySelector("#caro")!
        if(direction =="left"){
            TestCon.scrollLeft -= 200
        }else if(direction == "right"){
          TestCon.scrollLeft += 200
        }
      
  }
    return ( 
        <div className="lower">
             
           <h2>Recommendations</h2>
           <p> These are curated campaign base on your category choice</p>
           <div className="category">
            <button  className="cbtn cbtn-active">
                Newest
            </button>
            <button  className="cbtn">
                Top Rated
            </button>
            <button  className="cbtn">
                Live Projects
            </button>
            <button  className="cbtn">
                Niches
            </button>
           </div>
           <BsArrowRightCircle  onClick={() => scrollHandler("right")} className="arrow  righti" size="2rem"/>
            <BsArrowLeftCircle  onClick={() => scrollHandler("left")} className="arrow lefti" size="2rem"/>
           <div   id="caro" className="featured">
        
                <div className="projectCon">
                   {projects.map((data, i) => {
                       return(
                        <ProjectCard  key={i}
                            title ={data.name}
                            description ={data.description}
                            raised ={data.raised}
                            goal ={data.goal}
                            img = {data.img}
                            days = {data.days}
                            link ={data.link}
                        />
                       )
                   })}
               </div>
            </div>
        </div>
     );
}
 
export default Lowerdash;