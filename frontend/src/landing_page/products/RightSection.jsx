import React from 'react'

const RightSection = ({imageURL,
  productName,
  productDescription, learnMore}) => {
  return (
    <div className="container p-3 mt-0" style={{justifyContent:"space-between", marginLeft:"200px"}}>
      <div className="row align-items-center">
        <div className="col-4 p-5 ">
          <h3 className="text-muted">{productName}</h3>
          <p>{productDescription}</p>
          <div className="row">
            <div className="col-6">
              <a href={learnMore} style={{textDecoration: "none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div> 
        </div>
        <div className="col-7 p-5 ">
          <img src={imageURL}  />
        </div>
      </div>
    </div>
  )
}

export default RightSection
