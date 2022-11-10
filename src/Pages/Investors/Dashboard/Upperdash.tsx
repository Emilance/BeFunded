
import "./upper.css"
const Upperdash = ({name}:any) => {
    return ( 
        <div className="upperdash">
            <div className="welcome">
                <h1>{`Welome  ${name}`}</h1>
            </div>
            <div className="invest">
                <h1>No Investment Yet!</h1>
                <p> You do not have any investment yet, click on explore to view suitable and profitable business you can invest in</p>
                <button>Start Exploring</button>
            </div>
        </div>
     );
}
 
export default Upperdash;