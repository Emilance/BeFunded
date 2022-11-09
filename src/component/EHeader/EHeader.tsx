import React from 'react'
import './EHeader.css';
import User from '../../assets/User.png';
import DropDown from '../../assets/navDropDown.svg';

const EHeader = () => {
  return (
    <div className="eHeader">
        <div className="eHeader__content">
            <img src={User} alt="user" />
            <p>Peter</p>
            <img src={DropDown} alt="dropDown" />
        </div>

        <hr />
    </div>
  )
}

export default EHeader