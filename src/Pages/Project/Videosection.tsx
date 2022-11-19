

import React, { useState } from 'react';
import ReactPlayer from 'react-player'
import './vidsection.css'
const Videosection = ({product}:any) => {
    const [presentation , setPresentaion] = useState(true)
    return ( 
        <div className="vidsection">
            <p>SEED  INVESTMENT</p>
            <h1>{product.product_name}</h1>
            <div className="btnContainerv">
                <button onClick={() => setPresentaion(true)}  className={presentation ? "btnv primary-btnv" : "btnv"}>
                    Video
                </button>
                <button onClick={() => setPresentaion(false)}  className={!presentation ? "btnv primary-btnv" : "btnv"}>
                    Presentation
                </button>
            </div>
          {presentation  &&
            <div className="vid">
          
            <ReactPlayer  width="100%" height="100%" url={product.video_url} />
            </div>
          }
          {!presentation
             &&
            <div className="vid">
            <img  width="100%" height="100%" src={product.product_image} />
            </div>
          }
        </div>
     );
}
 
export default Videosection;