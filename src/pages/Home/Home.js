import React from 'react'
import Logo from "../../asset/ToUp 1.svg"
import "./Home.css"
import Logo1 from "../../asset/invest 2.svg"
import Logo2 from "../../asset/Later 1.svg"
import Logo3 from "../../asset/Grow 1.svg"
import Logo4 from "../../asset/noun_padlock.svg"
import Logo5 from "../../asset/money bag.svg"
import Logo6 from "../../asset/money palm.svg"
import Logo7 from "../../asset/block.svg"
import Logo8 from "../../asset/big mobile app.svg"
import Logo9 from "../../asset/small mobile app.svg"
import Logo10 from "../../asset/google-play-badge 2.svg"
import Logo11 from "../../asset/available-on-the-app-store-1 2.svg"
import Logo12 from "../../asset/Vector +.svg"
import Carousel from "../../components/Carouseel/Carousel";


function Home() {
  return (
    <div className="home-page">
      <div className="hero-section">
          <div className="text-container">
            <h3>Save Invest & Earn Anywhere !</h3>
            <p>Ipsum massa at cursus lacus erat lacus magna volutpat habitasse. Eu mauris et .</p>
            <button  className="btn">Get started</button>
            
          </div>
          <div className="logo-container">
            <img src={Logo} alt="top1-logo"/>
          </div>
      </div>
      <div className="section-2">
        <div className="section-2-text">
          <h4>Your guide to financial wellness</h4>
          <p> We’ll help you invest, save and spend responsibly 
           for just $1, $2 or $3 per month. No surprise fees, 
           just surprise upgrades
           </p>
          <a href="www.readmore.com">learn more</a>
        </div>
        <div className="section-2-card">
          <div className="card1">
                 <img src={Logo1} alt="invent logo" />
                 
              <div className="card1-text">
                <h6>Invest your spare change</h6>
                   <p> Set aside the leftover change from everyday purchases
                       by turning on automatic Round-Ups.
                   </p>
              </div>
          </div>
          <div className="card2"> 
              <img src={Logo2} alt="later1 logo" />
               <div className="card2-text">
                  <h6>Save for later</h6>
                  <p>Set aside the leftover change from everyday purchases 
                     turning on automatic Round-Ups.
                     </p>
               </div>
          </div>
          <div className="card3">
              <img src={Logo3} alt="grow logo" />
              <div className="card3-text">
                <h6>Grow your knowledge</h6>
                <p>Set aside the leftover change from everyday
                   purchases by turning
                   on automatic Round-Ups.
                   </p>
              </div>
          </div>
        </div>
      </div>
      <div className="section3">
          <img src={Logo4} alt="padluck" />
        <div className="section3-text">
          <h5>
            Security that's strong as oak
          </h5>
         <p>   
           All your data is protected by bank-level security
           and 256-bit encryption.
          </p>
          <a href="www.learnmore.com">learn more</a>
          <p className="p1">
            Our Company  non pretium eget etiam tempus. 
            Vitae sollicitudin in vulputate montes,
         </p>
        </div>
      </div>
      <div className="section4">
        <div className="section4a">
         <h6>Zero Commissions</h6>
         <p>
           Our Company  non pretium eget etiam tempus. 
           Vitae sollicitudin in vulputate montes, 
         </p>
        </div>
        <div className="section4b">
          <div className="sc1">
            <img src={Logo5} alt="money bag" className="money" />
            <h6>
              Financial Stablity
            </h6>
            <p>
            Our Payment gateway is secured 
            with military grade encryption 
            </p>

          </div>
          <div className="sc2">
            <img src={Logo6} alt="money palm" className="money-palm" />
            <h6>
              Swift Payment
            </h6>
            <p>
            Our Payment gateway is secured with 
            military grade encryption 
            </p>
          </div>
          <div className="sc3">
            <img src={Logo7} alt="block" className="block" />
            <h6>
              Easy to Use
            </h6>
            <p>Our Payment gateway is secured
               with military grade encryption 
            </p>
          </div>

        </div>
      </div>
      <div className="section6">
        <div className="section6a">
          <h5>Simple, Transparent Plans</h5>
         <div className="secb">   
          <div className="section6b1"> 
           <h5>Basic</h5>
           <h6>7% for 2month</h6>
            <p>
             Set aside the leftover change from
              everyday purchases by turning on automatic Round-Ups.
            </p>
         
            <button className="btn4"> Get started</button>
            <div className="plus1">
             <p>What’s Inculded</p>
             <img src={Logo12} alt="plus" />
           </div>    
          </div>
          <div className="section6b2"> 
           <h5>Plus</h5>
           <h6>22% for 6month</h6>
            <p>
             Set aside the leftover change from
              everyday purchases by turning on automatic Round-Ups.
            </p>
         
            <button className="btn4"> Get started</button>
           <div className="plus1">
             <p>What’s Inculded</p>
              <img src={Logo12} alt="plus" />
           </div>
           </div>
          </div>
        </div>
      </div>

      <div className="section5">

        <div className="phone">
          <img src={Logo9} alt="big mobile app" />
          <img src={Logo8} alt="small mobile app" />
        </div>

        <div className="section5-text">
          <h5> Invest.Earn</h5>
              <p>
                Our Company 
                non pretium eget etiam tempus.
                Vitae sollicitudin in vulputate montes, 
              </p>
          <div className="play-store"> 
           <img src={Logo10} alt="google app" />
           <img src={Logo11} alt="apple app" />
         </div>
        </div>
      </div>
      < Carousel />
    </div>
  )
}

export default Home;