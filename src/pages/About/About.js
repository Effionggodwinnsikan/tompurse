import React from 'react'
import Logo from "../../asset/man.svg"
import "./About.css"
import Logo1 from "../../asset/Ellipse 70.svg"
import Logo2 from "../../asset/circle.svg"
import Logo3 from "../../asset/arsh.svg"

function About() {
  return (
    <div>
      <div>
        <div className="about-hero">
         <div className="about-intro">
           <h3>
            Our Customer’s
             Above Finacial Freedom
            </h3>
           <p>
             We’ll help you invest, save and
             spend responsibly
             for just $1, $2 or $3 per month. No surprise fees, just surprise upgrades
            </p>
          </div>
          <div  className="introb">
            <div className="introb1">  
              <h6>
                Little About Tompurse
              </h6>
              <p>
                In cursus ac turpis massa eu volutpat semper.
                Fringilla consequat aliquam ornare odio
                lectus condimentum proin lacus vitae.
                Adipiscing amet elementum, tempor dolor senectus dui. 
                Aliquam viverra eget nunc mi posuere in morbi diam.
                Pellentesque sed quis ultrices fames. 
                Pretium nec vulputate commodo eu 
                adipiscing quis donec. Ultricies fames 
                accumsan nibh ultricies purus a.
                Rutrum purus lectus egestas dui velit
                tellus. Ac eleifend amet tellus sit urna aliquet
                et magna eu. Arcu et nisl,
                dictum enim vestibulum adipiscing.
              </p>
            </div>
            <div className="man"> 
              <img src={Logo} alt="man"/>
            </div>
          </div>

        </div>
      </div>
         
        <div  className="card-cover" > 
           <div className="about-h3">
              <h3> What Define Us.</h3>
            </div>
           <div className="about-card">
            <div  className="ac1">
                <img src={Logo1} alt="eclipes" />
              <img  src={Logo2} alt=" circle" />
              <h6> 
               Customer Satisfaction
               Obsession
              </h6>
              <p>
               We are in business to make our customers
               happy and meet their needs. Meeting
               the needs of our customers is an act we value dearly.
              </p>
           </div>
           <div className="ac2"> 
              <img src={Logo3} alt="eclipes" />
              <img  src={Logo2} alt=" circle" />
              <h6> 
               Customer Satisfaction
                Obsession
              </h6>
              <p>
              We are in business to make our customers
              happy and meet their needs. Meeting
              the needs of our customers is an act we value dearly.
              </p>
           </div>
            <div className="ac3">
              <img src={Logo3} alt="eclipes" />
              <img  src={Logo2} alt=" circle" />
              <h6> 
               Customer Satisfaction
                Obsession
              </h6>
              <p>
                We are in business to make our customers
                happy and meet their needs. Meeting
                the needs of our customers is an act we value dearly.
              </p>
            </div>
          </div>
       </div>
         <div className="wondering">
              <div className="hd">
               <h6>Wondering How We Generate Funds?</h6>
              </div>
           <div className="real">
             <h6>REAL ESTATE</h6>
             <p>Semper convallis magna vitae, 
               sit proin. Ipsum tristique varius vivamus sed mi laoreet.</p>
             <h6>AUTO MOBILE</h6>
             <p>Register an account and fill in necessary information</p>
             <h6>AGRICULTURE</h6>
             <p> Register an account and fill in necessary information</p>
             <h6>TRANSPORTATION</h6>
             <p>Register an account and fill in necessary information</p>
             <h6>LIQUID ASSESTS</h6>
             <p> Register an account and fill in necessary information</p>
           </div>
         </div>
    </div>
  );
};

export default About;