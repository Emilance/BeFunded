

import './vidsection.css'
const Videosection = () => {
    return ( 
        <div className="vidsection">
            <p>SEED  INVESTMENT</p>
            <h1>E-Vamp : Learning while Scrolling</h1>
            <div className="btnContainerv">
                <button  className="btnv primary-btnv">
                    Video
                </button>
                <button className="btnv">
                    Presentation
                </button>
            </div>
            <div className="vid">
                 Video will appear here
            </div>
        </div>
     );
}
 
export default Videosection;