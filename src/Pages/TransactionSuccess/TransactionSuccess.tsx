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
        <div className="transactionSuccess__header">
            <div className='transactionSuccess__left'>
                <AiOutlineArrowLeft className='transactionSuccess__icon' onClick={() => navigate(-1)}/>
                <span>Back to Dashboard</span>
            </div>

            <div className="transactionSuccess__userDetails">
                <img src={UserPicture} alt="user" />
                <p>Boluwatife</p>
                <MdKeyboardArrowDown className='transactionSuccess__icon'/>
            </div>
        </div>

        <div className="transactionSuccess__container">
            <h2 className="transactionSuccess__containerHeader">Transaction Successful</h2>
            <p className="transactionSuccess__containerParagraph">You have successfully funded E-Vamp. You will be contacted later</p>

            <button className='transactionSuccess__containerButton1'>Review Investment</button>
            <button onClick={GoHomeButton} className='transactionSuccess__containerButton2'>Go to Home</button>
            <img className='transactionSuccess__cloud' src={Cloud} alt="cloud" />
        </div>
    </div>
  )
}

export default TransactionSuccess