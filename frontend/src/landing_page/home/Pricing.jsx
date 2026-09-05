import React from 'react'

const Pricing = () => {
  return (
    <div className="container pt-0 pb-5 ps-5 pe-5 mt-0"> 
      <div className="row">
        <div className="col-5 ps-5 pe-0 pt-0 pb-5 ms-0">
          <h2 className="mb-4">
            Unbeatable pricing
          </h2>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.
          </p>
          <div className="link mt-4" style={{ fontSize: '18px', color: '#0080ff' }}>
          <a>See pricing <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        </div> 
        <div className="col-7 mt-5 ps-0 pt-0 pb-5 pe-5 ms-0">
        <div className="pricing-boxes d-flex justify-content-between align-items-center">
          <div className="picing-box d-flex justify-content-center align-items-center">
            <img src="media/images/pricing-eq.svg" alt="" style={{ width: '61%' }} />
            <p className="mt-5" style={{ fontSize: '10px' }}>
              Free account
              <br></br>
              opening
            </p>
          </div>
          <div className="picing-box d-flex justify-content-center align-items-center">
            <img src="media/images/pricing-eq.svg" alt="" style={{ width: '61%' }} />
            <p className="mt-5" style={{ fontSize: '10px' }}>
              Free account
              <br></br>
              opening
            </p>
          </div>
          <div className="picing-box d-flex justify-content-center align-items-center">
            <img src="media/images/other-trades.svg" alt="" style={{ width: '61%' }} />
            <p className="mt-5" style={{ fontSize: '10px' }}>
              Free account
              <br></br>
              opening
            </p>
          </div>
        </div> 
      </div>
      </div>
    </div>
  )
}

export default Pricing
