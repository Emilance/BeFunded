import React from 'react'
import './NotFound.css';
import ErrorImage from '../../assets/Error.svg';
import Befunded from '../../assets/BeFunded.svg';

const NotFound = () => {
  return (
    <div className='notFound'>
        <div className="notFound__header">
            <img src={Befunded} alt="befunded" />
        </div>

        <div className="notFound__container">
            <img src={ErrorImage} alt="errorPage" />

            <div className="notFound__text">Oops, The page you are looking for is not available</div>

            <button className="notFound__button">Back to home</button>

            <p className="notFound__getHelp">Get Help</p>
        </div>
    </div>
  )
}

export default NotFound