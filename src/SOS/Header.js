import React from 'react';
import './Header.css';
class Header extends React.Component{
  render(){
      return (
        <div>
   
       
        <button onClick={this.Emergency} 
              disabled ={this.state.show} variant="danger">Emergency</button>
              
              <button onClick={this.Others} 
              disabled ={!this.state.show}>Others</button> 
             
             <div>
              {this.state.show ? "tadaaaam": null}
               </div>
              </div>
     );
  }   
}
export default Header;