import React from "react";

const LeftSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}
) => {
  return (
    <div className="container p-5 mt-0">
      <div className="row">
        <div className="col-7 p-5 ">
          <img src={imageURL} />
        </div>
        <div className="col-4 p-5 mt-5">
          <h3 className="text-muted">{productName}</h3>
          <p>{productDescription}</p>
          <div className="row">
            <div className="col-6">
               <a href={tryDemo} style={{textDecoration: "none"}}>Try Demo <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            <div className="col-6">
              <a href={learnMore} style={{textDecoration: "none"}}>Learn More <i class="fa-solid fa-arrow-right"></i></a>
            </div>
          </div>
          <div className=" row mt-3">
            <div className="col-6">
              <a href={googlePlay}><img src="media/images/googlePlayBadge.svg"/></a>
            </div>
            <div className="col-6">
              <a href={appStore}><img src="media/images/appstoreBadge.svg"/></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
