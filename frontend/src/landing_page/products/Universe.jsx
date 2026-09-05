import React from 'react'

const Universe = () => {
  return (
    <div className="container p-5 ">
      <div className="row text-center">
        <h3 className='text-muted'>The Zerodha Universe</h3>
        <p className='text-muted mt-3'>
          Extend your trading and investment experience even further with our partner platforms
        </p>
      </div>
      <div className="container p-5 mt-0" style={{justifyContent:"space-between", marginLeft:"70px"}}>
      <div className="row">
        <div className="col-4 p-3">
          <img src="media/images/zerodhaFundhouse.png" style={{ width: '50%' }} />
          <p className=" text-12 text-muted mt-3 " style={{ fontSize: '14px'}}>
            Our asset management venture <br></br>that is creating simple and transparent index <br></br> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/sensibullLogo.svg" style={{ width: '70%' }} />
          <p className=" text-12 text-muted mt-3 " style={{ fontSize: '14px'}}>
            Options trading platform that lets you<br></br>create strategies, analyze positions, and examine<br></br> data points like open interest, Fll/Dll, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/tijori.svg" style={{ width: '40%' }} />
          <p className=" text-12 text-muted mt-3" style={{ fontSize: '14px'}}>
            Our asset management venture <br></br>that is creating simple and transparent index <br></br> funds to help you save for your goals.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4 p-3">
          <img src="media/images/streakLogo.png" style={{ width: '50%' }} />
          <p className=" text-12 text-muted mt-3 " style={{ fontSize: '14px'}}>
            Our asset management venture <br></br>that is creating simple and transparent index <br></br> funds to help you save for your goals.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/smallcaseLogo.png" style={{ width: '70%' }} />
          <p className=" text-12 text-muted mt-3 " style={{ fontSize: '14px'}}>
            Options trading platform that lets you<br></br>create strategies, analyze positions, and examine<br></br> data points like open interest, Fll/Dll, and more.
          </p>
        </div>
        <div className="col-4 p-3">
          <img src="media/images/dittoLogo.png" style={{ width: '40%' }} />
          <p className=" text-12 text-muted mt-3" style={{ fontSize: '14px'}}>
            Our asset management venture <br></br>that is creating simple and transparent index <br></br> funds to help you save for your goals.
          </p>
        </div>
      </div>
      </div>
      <div className="row text-center">
        <button className='p-1 btn btn-primary fs-5 mb-3' style={{width:"16%",margin:"0 auto"}}>Sign up for free</button>
      </div>
      
    </div>
  )
}

export default Universe
