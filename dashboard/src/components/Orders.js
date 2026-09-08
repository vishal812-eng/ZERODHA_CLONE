import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3002/allOrders")
      .then(res => {
        console.log(res.data);
        setOrders(res.data);
      })  
  }, [])

  return (
    <div className="orders">
      {orders.length === 0 ? (
        <div className="no-orders">
          <p>You haven't placed any orders today</p>
          <Link to={"/"} className="btn">Get started</Link>
        </div>
      ) : (
        <div>
          <h4>Orders ({orders.length})</h4>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1px solid #eee", color: "#aaa", fontSize: "13px" }}>
                <th style={{ textAlign: "left", padding: "10px 0", fontWeight: "normal" }}>Stock</th>
                <th style={{ textAlign: "right", padding: "10px 0", fontWeight: "normal" }}>Qty.</th>
                <th style={{ textAlign: "right", padding: "10px 0", fontWeight: "normal" }}>Price</th>
                <th style={{ textAlign: "right", padding: "10px 0", fontWeight: "normal" }}>Mode</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #eee" }}>
                  <td style={{ 
                    padding: "12px 0",
                    color: order.mode === "BUY" ? "#387ED1" : "#e44"
                  }}>
                    {order.name}
                  </td>
                  <td style={{ textAlign: "right", padding: "12px 0" }}>
                    {order.qty}
                  </td>
                  <td style={{ textAlign: "right", padding: "12px 0" }}>
                    ₹{order.price.toFixed(2)}
                  </td>
                  <td style={{ 
                    textAlign: "right", 
                    padding: "12px 0",
                    color: order.mode === "BUY" ? "green" : "red",
                    fontWeight: "bold"
                  }}>
                    {order.mode}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default Orders;