import React from "react";

const Footer = () => {
  return (
    <footer className="border-top" style={{ backgroundColor: "rgb(250, 250, 250)" }}>
    <div className="container p-5" >
      <div className="row">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "55%" }}
          />
          <p className="mt-3 text-muted" style={{ fontSize: "14px" }}>
            &copy; 2010 - 2026, Zerodha Broking Ltd.
            <br></br>
            All rights reserved.
          </p>
          <div className="icons d-flex gap-3 text-muted my-4 border-bottom pb-3" style={{ fontSize: "20px" }}>
            <i class="fa-brands fa-x-twitter" style={{color: "rgb(22, 21, 21)"}}></i>
            <i class="fa-brands fa-square-facebook" style={{color: "rgb(22, 21, 21)"}}></i>
            <i class="fa-brands fa-instagram" style={{color: "rgb(22, 21, 21)"}}></i>
            <i class="fa-brands fa-linkedin-in" style={{color: "rgb(22, 21, 21)"}}></i>
          </div>
          <div className="icons2 d-flex gap-3 my-4" style={{ fontSize: "20px" }}> 
            <i class="fa-brands fa-youtube" style={{color: "rgb(22, 21, 21)"}}></i>
            <i class="fa-brands fa-whatsapp" style={{color: "rgb(22, 21, 21)"}}></i>
            <i class="fa-brands fa-telegram" style={{color: "rgb(22, 21, 21)"}}></i>
          </div>
        </div>
        <div className="col d-flex flex-column gap-2">
          <h5>Account</h5>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Open demat account</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Minor demat account</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>NRI demat account</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>HUF demat account</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Commodity</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Dematerialisation</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Fund transfer</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>MTF</a>
        </div>
        <div className="col d-flex flex-column gap-2">
          <h5>Support</h5>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Contact us</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Support portal</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>How to file a complaint?</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Status of your complaints</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Bulletin</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Circular</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Z-Connect blog</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Downloads</a>
        </div>
        <div className="col d-flex flex-column gap-2">
          <h5>Company</h5>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>About</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Philosophy</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Press & media</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Careers</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Zerodha Cares (CSR)</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Zerodha.tech</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Open source</a>
          <a href="#" className="text-muted " style={{textDecoration:"none"}}>Referral program</a>
        </div>
      </div>
      <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
      <p>
        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha
        Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
        School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
        any complaints pertaining to securities broking please write to
        complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure
        you carefully read the Risk Disclosure Document as prescribed by SEBI |
        ICF
      </p>
      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances
        <br></br>
        Smart Online Dispute Resolution | Grievances Redressal Mechanism
      </p>
      <p>
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers/depository participants.
        Receive information of your transactions directly from
        Exchange/Depositories on your mobile/email at the end of the day. Issued
        in the interest of investors. KYC is one time exercise while dealing in
        securities markets - once KYC is done through a SEBI registered
        intermediary (broker, DP, Mutual Fund etc.), you need not undergo the
        same process again when you approach another intermediary." Dear
        Investor, if you are subscribing to an IPO, there is no need to issue a
        cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please create a ticket here.
        </p>        
        <p>
        *Customers availing insurance advisory services offered by Ditto
        (Tacterial Consulting Private Limited | IRDAI Registered Corporate A  gent
        (Composite) License No CA0738) will not have access to the exchange
        investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
        mechanism for such products. 
        </p>
        <p>
        Fixed deposit products offered on this
        platform are third-party products (TPP) and are not Exchange traded
        products. These are offered through Blostem Fintech Private Limited.
        Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting
        solely as a distributor for these products. Any disputes arising with
        respect to such distribution activity will not have access to SEBI
        SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration
        mechanism. Fixed deposits are regulated by the Reserve Bank of India
        (RBI).</p>
      </div>
    </div>
    </footer>
  );
};
export default Footer;
