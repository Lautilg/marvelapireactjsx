import React from "react";
import  "./Footer.css";
import m from "../img/mlogo.png"


const Footer = () => {
    return(
        <div className="main-footers">
            <div className="containers">
              <div className="rows">
               <div className="col2">
               <img
            className="mlogo"
            src={m}
            alt="Marvel"
          />
               </div> 
               {/* Column1 */}
               <div className="col2">
                   <h4>LOCATION</h4>
                   <ul className="list-unstyled">
                       <li>2325468970</li>
                       <li>Buenos Aires, Argentina</li>
                       <li>Tucuman 950</li>
                   </ul>
               </div>
               {/* Column2 */}
               <div className="col2">
                   <h4>POLITICS</h4>
                   <ul className="list-unstyled">
                       <li>About Marvel</li>
                       <li>HELP/FAQS</li>
                       <li>CARRERS</li>
                       <li>INTERNSHIPS</li>
                   </ul>
               </div>
              </div>
              <div className="row2">
              
              </div>
            </div>
        </div>
    )
}

export default Footer;