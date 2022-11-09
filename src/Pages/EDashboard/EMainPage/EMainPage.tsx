import React from 'react';
import './EMainPage.css';

const EMainPage = () => {
  return (
    <div className="eMainPage">
        <div className="eMainPage__container">
            <h2 className="eMainHeading">No Listed product Yet!</h2>
            <p className="eMainText">You do not hav any live campaigns or listed products yet. </p>
            <button className='eMainText__button'>Start Pitching</button>
        </div>
    </div>
  )
}

export default EMainPage