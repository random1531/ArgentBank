import React from 'react'

export default function Card({Tile, Amount,transactionReducerId}) {
  return (
 <>
 <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{Tile}</h3>
          <p className="account-amount">{Amount}</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button" id={transactionReducerId}>View transactions</button>
        </div>
      </section>
 </>
  )
}
