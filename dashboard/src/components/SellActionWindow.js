import React, { useState, useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import GeneralContext from "./GeneralContext";

import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const navigate = useNavigate();
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSellClick = () => {
    axios.post("https://zerodha-clone-4hp1.onrender.com/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL",   
    }).then(() => {
      closeSellWindow()
        navigate("/orders");
    })
  };

  const handleCancelClick = () => {
    closeSellWindow();
  };

  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>
      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-red" onClick={handleSellClick}>Sell</Link>
          <Link className="btn btn-grey" onClick={handleCancelClick}>Cancel</Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;