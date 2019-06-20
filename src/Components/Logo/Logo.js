import React from "react";
import Tilt from 'react-tilt'
import logo from "./logo.png";

const Logo =()=>{
			return(
				<Tilt className="Tilt br2 shadow-5 center" options={{ max : 45 }} style={{ height: 250, width: 250 }} >
				 <div className="Tilt-inner"> <img style={{paddingTop:'75px'}}alt ='logo' src ={logo}/> </div>
				</Tilt>
			

			
		    );
		}
		
export default Logo;