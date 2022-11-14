import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ProductReg2.css';

const ProductReg2 = () => {
  const navigate = useNavigate()
  return (
    <div className='productReg2'>
        <p className="productReg2__back" onClick={() => navigate(-1)}>back</p>
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
            <input type="text" id='video-url' placeholder='https://'/>
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
            <p>Upload Image</p>
          </div>

          <div className="productReg2__nextButton" onClick={() => navigate('/dashboard/productsreg3')}>Next</div>
        </div>
    </div>
  )
}

export default ProductReg2