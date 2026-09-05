import React from 'react'

const Hero = () => {
  return (  
    <div className="container">
      <div className="row text-center mt-5 p-5">
        <h2 className="">Charges</h2>
        <h6 className="text-muted fs-5 mt-2">List of all charges and taxes</h6>
      </div>
      <div className="row d-flex justify-content-center text-center mt-3 p-5">
        <div className="col-4">
          <img src="media/images/pricing-eq.svg" style={{ width: '70%'}} />
          <h3>Free equity delivery</h3>
          <p className="text-muted mt-3">
            All equity delivery investments (NSE, BSE),<br></br>
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/other-trades.svg" style={{ width: '70%'}} />
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted mt-3">
            Flat ₹ 20 or 0.03% (whichever is lower) per <br></br> executed order on intraday trades across <br></br> equity, currency, and commodity trades. Flat <br></br> ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricing-eq.svg" style={{ width: '70%'}} />
          <h3>Free direct MF</h3>
          <p className="text-muted mt-3">
            All direct mutual fund investments are <br></br> absolutely free — ₹ 0 commissions & DP <br></br> charges.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero