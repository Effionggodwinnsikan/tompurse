// import React from 'react'
import "./Tompurse.css"
 import Logo10 from "../../asset/Vector (17).svg"
 import Logo20 from "../../asset/avatar1.svg"
 import Logo30 from "../../asset/avatar2.svg"
import Logo50 from "../../asset/avatar3.svg"


function Tompurse() {
  return  (
<div className="section7-div4carousel">

    <div className="item item-1">
        <div>
            <img src={Logo20}  alt="avatar1"/>
             <h5>Kolawole Tobi</h5>
            <img src={Logo10} alt="apostroph"/>
            <p>
                Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.
            </p>
        </div>
    </div>
    <div className="item item-2">
        <div>
            <img src={Logo30} alt="avatar2" />
            <h5>Kolawole Tobi</h5>
            <img src={Logo10} alt="alpostroph" />
           <p>
               Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.
           </p>
        </div>
    </div>
    <div className="item item-3">
        <div>
            <img src={Logo50}  alt="avatar3"/>
            <h5>Kolawole Tobi</h5>
            <img src={Logo10} alt="alpostroph" />
            <p>
               Ultricies quis commodo ac at sed at sagittis risus ultrices. A rhoncus in adipiscing malesua.
           </p>
       </div>
    </div>
 </div>
   )
 };



 export default Tompurse;