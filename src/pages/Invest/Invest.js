import React from "react";
import "./Invest.css";
import Logo from "../../asset/iPhone X Flying.svg";
import Logo1 from "../../asset/circle.svg";
import Logo2 from "../../asset/Ellipse 70.svg";

function Invest() {
  return (
    <div className="invest-section">
      <div className="invest-intro">
        <h3>Save Invest & Earn Anywhere !</h3>
        <p>
          Ipsum massa at cursus lacus erat lacus magna volutpat habitasse. Eu
          mauris et .
        </p>
      </div>
      <div className="invest-1">
        <div className="invest-1a">
          <h6>Basic Plan</h6>
          <p>
            The Basic plan offers you an affordable short term investment
            platform to cater for your basic needs within the shortest time
            frame (2 months) with a risk free return of 7% on your principal.
            With this plan, you can ably save for your upcoming expenses and the
            same time make some earnings on them with a minimum of 5000NGN.
          </p>
        </div>
        <img src={Logo} alt="iPhone" />
      </div>
      <div className="savings">
        <h6>
          Your subscription to this plan would help you meet those needs such
          as;
        </h6>
        <div className="saving1">
          <div className="p1">
            <img src={Logo1} alt="circle" />
            <img clasName="log" src={Logo2} alt="eclips" />
            <p>Payment of fees</p>
          </div>
          <div className="p2">
            <img src={Logo1} alt="circle" />
            <img src={Logo2} alt="eclips" />

            <p>Purchase of mobile phones and electronics</p>
          </div>
          <div className="p3">
            <img src={Logo1} alt="circle" />
            <img src={Logo2} alt="eclips" />
            <p> Payment of subscription and bills</p>
          </div>
          <div className="p4">
            <img src={Logo1} alt="circle" />
            <img src={Logo2} alt="eclips" />
            <p>Purchases of wears</p>
          </div>
          <div className="p5">
            <img src={Logo1} alt="circle" />
            <img src={Logo2} alt="eclips" />
            <p>Savings for upcoming events</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invest;
