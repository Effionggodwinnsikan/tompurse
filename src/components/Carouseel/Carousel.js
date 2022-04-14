import Logo from "../../asset/man 1.svg"
import Logo1 from "../../asset/man2.svg"
import Logo2 from "../../asset/man3.svg"
import Logo3 from "../../asset/Vector (17).svg"
import Logo4 from "../../asset/Rectangle 119.svg"
import Logo5 from "../../asset/Rectangle 120.svg"
import Logo6 from "../../asset/less than.svg"
import Logo7 from "../../asset/greater than.svg"


import "./Carousel.css"; 
import React, { Component } from "react";
import Slider from "react-slick";
export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

     return (
      <div className="cars" >
         <div className="tog"> 
          <img src={Logo6}  alt="less thsn" className="lessthan" />
            <h3 className="car1">See what others have to say</h3>
          <img src={Logo7}  alt="less thsn" className="greaterthan" />
         </div>
      <Slider {...settings}>
        
      <div className="cc1">  
            <img src={Logo} alt="man1" /> 
             <h6>Kolawole Tobi</h6>
            < img src={Logo3} alt="man1" />
           <p>Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
        </div>
        <div className="cc2"> 
           <img src={Logo1} alt="man1" /> 
             <h6>Kolawole Tobi</h6>
            < img src={Logo3} alt="man1" />          
             <p>Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p> 
       </div>
       <div className="cc3"> 
            <img src={Logo2} alt="man1" /> 
             <h6>Kolawole Tobi</h6>
            < img src={Logo3} alt="man1" />
            <p>Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
          </div> 
       
          
          {/* <div className="cc5">           
          <div className="lg4"><img src={Logo4} alt="rectangle" /> </div> 
           <div className="lg5"><img src={Logo5} alt="rectangle" /> </div> 
          </div>  */}
    
              <div>
          <h3></h3>
           </div>
   
           </Slider>
    </div>
     );
   }
 }




// import React from 'react'

// function Carousel () {
//   return (
//     <div className=" cars">
//           <div className=" car1">
//               <h3>See what others have to say</h3>
//           </div>
//        <div   className="carousel">    
//         <div className="cc1">  
//             <img src={Logo} alt="man1" /> 
//             <h6>Kolawole Tobi</h6>
//            < img src={Logo3} alt="man1" />
//            <p>Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
//         </div>
//         <div className="cc2"> 
//           <img src={Logo1} alt="man1" /> 
//             <h6>Kolawole Tobi</h6>
//            < img src={Logo3} alt="man1" />
//            <p>Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p> 
//         </div>
//         <div className="cc3"> 
//            <img src={Logo2} alt="man1" /> 
//             <h6>Kolawole Tobi</h6>
//            < img src={Logo3} alt="man1" />
//            <p>Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.</p>
//         </div> 
//          {/* <div className="cc5">  */}
//             {/* <img src={Logo4} alt="rectangle" /> */}
//             {/* <img src={Logo5} alt="rectangle" /> */}
//         {/* //    </div> */}
//      </div>

//     </div>

//   )
// }

// export default Carousel;