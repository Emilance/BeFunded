
import './details.css'
type paragraphtype ={
    title:string,
    description: string
}

const ParagraphInfo = ({title,  description} : paragraphtype) => {
    return ( 
        <div className="paragraph">
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
     );
}
 
export default ParagraphInfo;