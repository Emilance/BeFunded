import ParagraphInfo from "./ParagraphInfo";
import "./details.css"
import Team from "./Team";
const Details = () => {
    return ( 
        <div className="pinfo">
            <div className="pinfosb">
                <p>Comapany/Creator Terms</p>
                <p>Return On Investment</p>
                <p>The Team</p>
                <p>Registration</p>
                <p>Funds Usage</p>
                <p>Current Market Data</p>
                <p>Important News</p>
                <p>Risks & Disclosures</p>
                <p>User Experience Data</p>
                <p>BeFunded FAQs</p>
                <p>Contact Befunded</p>
                <p>Download</p>
                
            </div>
            <div className="divider"></div>
            <div className="infoCon">
                <ParagraphInfo
                   title="Company Investment Terms"
                   description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus."
                />
                  <ParagraphInfo
                   title="ROI and Investors Perks"
                   description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus."
                />
                  <ParagraphInfo
                   title="Company Details"
                   description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus."
                />
                <Team/>
                <ParagraphInfo
                   title="Company Registration"
                   description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus."
                />
                  <ParagraphInfo
                   title="Funds Usage Breakdown"
                   description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus."
                />
                  <ParagraphInfo
                   title="Current Market Data Analysis"
                   description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi illo placeat quas similique est facilis maiores rerum laudantium, quos tempora iste reiciendis magni recusandae itaque hic! Debitis nesciunt, quisquam, nihil placeat, repudiandae culpa facere eveniet ipsa aspernatur dignissimos eum voluptatibus."
                />
            </div>
        </div>
     );
}
 
export default Details;