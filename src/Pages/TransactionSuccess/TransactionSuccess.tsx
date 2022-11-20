import React from 'react'
import Header from '../../component/header/Header';
import './TransactionSuccess.css';
import UserPicture from '../../assets/User.png'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import Cloud from '../../assets/successCloud.svg';

const TransactionSuccess = () => {
    const navigate = useNavigate();

    function ReviewInvestmentButton() {
        alert('Use the navigate object');
    }

    function GoHomeButton(){
        navigate('/')
    }

  return (
    <div className="transactionSuccess">
      <Header  />

        <div className="transactionSuccess__container">
            <h2 className="transactionSuccess__containerHeader">Transaction Successful</h2>
            <p className="transactionSuccess__containerParagraph">You have successfully funded your wallet. You will be contacted later</p>

            <button className='transactionSuccess__containerButton1'>Go to dashBoard</button>
            <button onClick={GoHomeButton} className='transactionSuccess__containerButton2'>Go to Home</button>
            <img className='transactionSuccess__cloud' src={Cloud} alt="cloud" />
        </div>
    </div>
  )
}

export default TransactionSuccess