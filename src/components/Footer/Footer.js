import Logo50 from "../../asset/TOMSPURSE LOGO_Vertical Logo B&W 7 (1).svg"
import Logo1 from "../../asset/facebook logo.svg"
import Logo2 from "../../asset/twitter logo.svg"
import Logo3 from "../../asset/instagram logo.svg"
import "./Footer.css"


function Footer() {
    return(
     <footer className="main-footer">
        <div className="intro">
          
            <div className="vertical-t"></div>
            <div className="left-t"></div>
            <div className="right-t"></div>
           <p className="invest"> 
              Total control, total freedom.
              Be invested. 
            </p>  
                     
            <button className="ftb">Get started</button>
                   
                 
                
        </div>
        <div className="footer-container">
           <div className="logo-container1">
              <img src={Logo50} alt="tomspurse-logo 2"/>
           </div>
           <div className="footer-wrapper">
              <h4> Company</h4>
              <p>Home </p>
               <p>About Us </p>
               <p>Investment Plan</p>
               <p>Mail US </p>
            </div>
           <div className="footer-wrapper1">
              <h4> Product.</h4>
               <p>Saving Plan </p>
                <p>Value Plan </p>
           </div>
           <div className="footer-wrapper2">
               <h4>Quick Links</h4>
               <p>Create an account  </p>
               <p> Log in </p>
               <p> Instructions</p>
            </div>
           <div className="footer-wrapper2">
                <h4>Connects</h4>
               <div className="icon-wrapper">
                  <img src={Logo1} alt="facebook-logo" /> 
                  <img src={Logo2} alt="twitter-logo" />
                  <img src={Logo3} alt="instagram-logo" />
                </div>
               <p>support@tomspurse.com </p>
                <p>+2345685921</p>
               <p> 
                 Suite C201, Plot 1245 Adetokunbo 
                 Ademola Crescent,
                 Wuse 2, Abuja, FCT 
                </p>
            </div>
          </div>
           <div className="copyright">
              <p>  
                  By using this website, you accept our 
                   Terms of Use  and  Privacy Policy  and acknowledge
                    receipt of all disclosures in our  Disclosure Library .
                    All agreements are available in our  Agreement Library. 
                    M1 relies on information from various sources believed 
                    to be reliable, including clients and third parties,
                    but cannot guarantee the accurac
               </p>
               <div class="copyrightb">
                <p>
                © 2019 TomsPurse Limited. All Rights Reserved. 
                </p>
                <p>Designed and Developed By Grazac  </p>
               </div>
           </div>
        
        </footer>
    );
}
export default Footer;