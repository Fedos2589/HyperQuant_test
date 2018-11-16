import React from 'react'

export const MainInfo = ({ tradingCapital, tradingCapitalCurrency, balance, onHold }) =>
  <section className="mainInfo">
    <div className="container">
      <div className="capital">
        <span className="title">Trading capital</span>
        <span className="value">{tradingCapital} {tradingCapitalCurrency}</span>
      </div>
      <div className="details">
        <div className="details__item">
          <span className="title">Balance:</span>
          <span className="value">{balance}</span>
        </div>
        <div className="details__item">
          <span className="title">On hold:</span>
          <span className="value">{onHold}</span>
        </div>
      </div>
    </div>
  </section>
