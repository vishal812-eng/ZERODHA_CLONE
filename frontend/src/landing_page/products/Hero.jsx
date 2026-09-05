import React from "react";

const Hero = () => {
  return (
    <div className="container border-bottom p-5">
      <div className="text-center mt-3 p-3 ">
        <h2 className="text-muted mt-3">Zerodha Products</h2>
        <h5 className="text-muted mt-3">Sleek, modern, and intuitive trading platforms</h5>
        <p className="text-muted mt-3 mb-5">
          Check out our{" "}
          <a href="#" style={{ textDecoration: "none" }}>
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
