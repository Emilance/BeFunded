import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductReg2.css';
import {MdOutlineKeyboardBackspace}  from "react-icons/md"

const ProductReg2 = ({setRegProduct, product, setProduct}:  any ) => {
  const navigate = useNavigate()
  return (
    <div className='productReg2'>
        <div className="backbtn" onClick={() => setRegProduct(1)}>
        <MdOutlineKeyboardBackspace  size="1.5rem"/>
       <p >Back</p>
      </div>
        <h1 className="productReg2__heading">List Your Product</h1>
        <p className="productReg2__motto">Ready to get Funded, Enter your Product Information</p>

        <p className="productReg2__step">Step 2 of 4</p>

        <div className="productReg2__pitchVideo">
          <h3>Pitch Video</h3>
          <p className="pitch__text">
            Add a video to appear on the top of your campaign page. Campaigns with videos raise 2000% more than campaigns without videos. Keep your video 2-3 minutes. Enter a YouTube or Vimeo URL.
          </p>
        </div>

        <div className="productReg2__form">
          <div className="productReg2__inputDiv">
            <label htmlFor="video-url">Video Url</label>
            <input type="text" id='video-url'
             placeholder='https://'
             value={product.video_url}
             name="video_url"
             onChange={(e)=> setProduct({...product, video_url: e.target.value})}
             />
          </div>

          <div className="productReg2__videoIframe">
            <p>Video will appear here</p>
          </div>

          <div className="productReg2__videoOverlay">
            <h2 className="videoOverlay__header">Video Overlay Image (Optional)</h2>

            <p className="videoOverlay__text">
            Choose an image to represent your video before it plays.695 x 460 recommended resolution.
            </p>
          </div>

          <div className="uploadImage__iframe">
            <input type="file" id='file'
               name="image"
                onChange={(e)=> setProduct({...product, product_image: e.target.files})}
            />
            <p>Upload Image</p>
          </div>

          <div className="productReg2__nextButton" onClick={() =>setRegProduct(3)}>Next</div>
        </div>
    </div>
  )
}

export default ProductReg2