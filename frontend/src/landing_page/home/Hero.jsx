import React from 'react'

const Hero = () => {
  return (
    <div className='container p-5 mb-5'>
      <div className="row text-center ">
        <div className='mt-2'>
          <img style={{width:"70%"}} src='media/images/homeHero.svg' alt='Hero Image' />
        </div>
       
       <h1 className='mt-5'>Invest in everything</h1>
       <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
       <button className='p-1 btn btn-primary fs-5 mb-5' style={{width:"16%",margin:"0 auto"}}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero
