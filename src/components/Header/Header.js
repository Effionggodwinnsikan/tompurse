

import Logo from "../../asset/TOMSPURSE LOGO_Horizontal Logo Full Color.svg"
import Buttons from "../Buttons/Button";
// import Navigation from "../Navigation/Navigation.js";
import classes from './Header.module.css';
import {Close, MenuOutlined} from "@material-ui/icons"
import React,{useState, useEffect} from "react"
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


function Header() {

    const location = useLocation();
    const [cssStyle, setCssStyle] = useState([classes.header]);
    useEffect(() => {
      if (location.pathname === '/about') setCssStyle([classes.header, classes.about]);
      else if (location.pathname === '/invest')
        setCssStyle([classes.header, classes.invest]);
      else setCssStyle([classes.header, classes.default]);
    }, [location]);


          const [active,setActive] = useState(false)
          const showMenu = () => {
            setActive(!active)
          }
    return(
          
        <header className={cssStyle.join ( " " )}>

            <div className={classes.Header_container}>  
                <div className={classes.Header_logo}>
                  <img src={Logo} alt="tomspurse-logo"/>
                </div>
                <div className={classes.MenuIcon}> 
                 < MenuOutlined className={classes.Menu} onClick={showMenu} />
                </div>
    
     
                <nav className={active ? "Slider active" : "Slider"}>

                    
                <div className={classes.Closed}> 
                   < Close className={classes.Close}  onClick={showMenu}/>
               </div>

               <ul className={classes.Slider_ul}>
               <li className={classes.Slider_li}>
                <Link to="/" className={classes.Slider_link}>
                 Home
                </Link>
                </li>
                <li className={classes.Slider_li}>
                <Link to="/about" className={classes.Slider_link}>
                 About Us
                 </Link>
               </li>
               <li className={classes.Slider_li}>
               <Link to="/invest" className={classes.Slider_link}> 
                Invest
                </Link>
                </li>
                 <li className={classes.Slider_b}>
               <Link to="/login" className={classes.Slider_linK}>
                Login
               </Link>
              </li>
              </ul>
    
              </nav>
                <Buttons text="Get Started" />
            </div>     

        </header>
           
    );
}
export default Header;
