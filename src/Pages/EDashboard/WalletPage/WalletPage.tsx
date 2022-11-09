import React from 'react'
import './WalletPage.css';

const WalletPage = () => {
  return (
    <div className="walletPage">
      <h3 className="walletPage__header">Wallet</h3>

      <hr className="walletPage__line" />

      <div className="walletPage__detailBox">
        <div className="walletLeft__details">
          <p className='walletLeft__totalText'>Total Raised</p>

          <h1 className="wallet__funds">$0.00</h1>

          <p className="walletFund__details">Amount raised from open campaigns</p>
        </div>

        <div className="walletRight__details">
          <h3 className="wallet__investors">0 investors</h3>

          <button className="wallet__withdraw">Withdraw</button>
        </div>
      </div>

      <div className="walletProduct__container">
        <h2 className="walletProduct__header">No Listed Product Yet!</h2>
        <p className="walletProduct__text">You do not have any live campaigns or listed products yet. </p>
        <button className="walletProduct__button">Start Pitching</button>
      </div>
    </div>
  )
}

export default WalletPage