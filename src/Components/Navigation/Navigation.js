import React from "react";

const Navigation =({onRouteChange,isSignedIn})=>{
			
				if (isSignedIn){
					return(
					<nav style={{display : 'flex', justifyContent :'flex-end'}}>
					<p onClick={()=>onRouteChange("signout")}className="f3 link dim black underline pa3 pointer"> Log Out</p>
					</nav>
					);
				} else{
					return(
						<nav style={{display : 'flex', justifyContent :'flex-end'}}>
						</nav>

						)


				}
			
			
		    
		}

export default Navigation;