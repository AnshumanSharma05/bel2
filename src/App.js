import React , {Component}from 'react';
import './App.css';
import Particles from 'react-particles-js'
import Navigation from "./Components/Navigation/Navigation";
import Signin from "./Components/Signin/Signin";
import Logo from "./Components/Logo/Logo";
import Logo2 from "./Components/Logo2/Logo2";
import DownloadLinkForm from "./Components/DownloadLinkForm/DownloadLinkForm";
const particle={

            particles: {
              line_linked: {
                shadow: {
                  enable: true,
                  color: "#3CA9D1",
                  blur: 5
                }
              }
            }
          } 


   





class App extends Component {
  constructor(){
    super();
    this.state={
      route:"signin",
      isSignedIn:false
      
    }
  }

  componentDidMount(){
  fetch("http://localhost:3000/")
    .then(response => response.json())
    .then(console.log)
 }     
  onRouteChange=(route)=>{
        if(route==="signout"){
          this.setState({isSignedIn:false})

        }else if(route==="home"){
          this.setState({isSignedIn:true})
        }
        this.setState({route:route})
  }

  render(){
    return (
        <div className="App">
         <Particles className="particles" 
          params={particle}
          
        />

        <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
        {this.state.route==="home"
        ?<div>
            <Logo/>
            <DownloadLinkForm/>
        </div>
        : (
          this.state.route==="signin" 
          ? <div>
              <Logo2/>
              <Signin onRouteChange={this.onRouteChange}/>
             </div>   
          : <div>
              <Logo2/>
              <Signin onRouteChange={this.onRouteChange}/>
             </div> 
          )
        

      }
        </div>
    );
  }
}

export default App;
