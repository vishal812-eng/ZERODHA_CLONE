import React from 'react'

const Education = () => {
  return (
    <div className='container mt-5'>
      <div className="row">
        <div className="col-6 p-5 ">
          <img src="media/images/education.svg" alt="" />
        </div>
        <div className="col-6 p-5 mt-5">
          <h3 className="mb-4" style={{opacity:"0.87"}}>Free and open market education</h3>
          <p className="mb-4"> 
            Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.
          </p> 
          <a src="#" className="link mt-4" style={{ fontSize: '18px', color: '#0080ff',textDecoration:"none" }}>
            Varsity<i class="fa-solid fa-arrow-right"></i>
          </a>
          <p className="mb-4 mt-4">
            TradingQ&A, the most active trading and investment community in India for all your market related queries.
          </p>
          <a src="#" className="link" style={{ fontSize: '18px', color: '#0080ff',textDecoration:"none" }}>
            TradingQ&A<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Education
