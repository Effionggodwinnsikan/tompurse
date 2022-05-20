import Logo from "../../asset/avatar1.svg";
import Logo1 from "../../asset/avatar2.svg";
import Logo2 from "../../asset/avatar3.svg";
import Logo3 from "../../asset/Vector (17).svg";
import Logo4 from "../../asset/arrow-left.svg";
import Logo5 from "../../asset/arrow-right.svg";
import Logo6 from "../../asset/black-circle.svg";
import Logo7 from "../../asset/blue-circle.svg";
import Tompurse from "../../components/Tompurse/Tompurse";
import Logo10 from "../../asset/Vector (17).svg";
import Logo20 from "../../asset/avatar1.svg";
import Logo30 from "../../asset/avatar2.svg";
import Logo50 from "../../asset/avatar3.svg";

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
      cssEase: "linear",


      
       
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow:2 ,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      
    };

    return (
      <div className="cars">
        <div className="tog">
          <img src={Logo4} alt="less thsn" className="lessthan" />
          <h3 className="car1">See what others have to say</h3>
          <img src={Logo5} alt="less thsn" className="greaterthan" />
        </div>
        <Slider className="repair" {...settings}>
          <div className="caro-slides">
            <div className="item item-1">
              <img src={Logo20} alt="avatar1" />
              <h5>Kolawole Tobi</h5>
              <img src={Logo10} alt="apostroph" />
              <p>
                Ultricies quis commodo ac at sed at sagittis risus ultrices. A
                rhoncus in adipiscing malesua.
              </p>
            </div>
          </div>
          <div className="caro-slides1">
            <div className="item item-2">
              <img src={Logo30} alt="avatar2" />
              <h5>Kolawole Tobi</h5>
              <img src={Logo10} alt="alpostroph" />
              <p>
                Ultricies quis commodo ac at sed at sagittis risus ultrices. A
                rhoncus in adipiscing malesua.
              </p>
            </div>
          </div>
          <div className="caro-slides2">
            <div className="item item-3">
              <img src={Logo50} alt="avatar3" />
              <h5>Kolawole Tobi</h5>
              <img src={Logo10} alt="alpostroph" />
              <p>
                Ultricies quis commodo ac at sed at sagittis risus ultrices. A
                rhoncus in adipiscing malesua.
              </p>
            </div>
          </div>

         
          <div></div>
        </Slider>
      </div>
    );
  }
}

