  import React, { Component } from 'react';
  //import {BrowserRouter } from 'react-router-dom';
  import './App.css';
  //import firebase from './Firebase/firebase';
  //import Post from './SOS/Post';
  import NavBar from './SOS/Navbar';
  import Post from './SOS/Post';


  class App extends Component {
  constructor(props){
  super(props)

  this.state = {
  show: true,

  photo: ''
  }
  this.Emergency = () => this.setState({show: true})
  this.Others = () => this.setState({show: false})


  }
    render() {
      return (

      

  <div className="App">
  <NavBar/>

        
  <div>
    
        
  </div>
  <button onClick={this.Emergency} 
        disabled ={this.state.show} variant="danger">Emergency</button>
        
        <button onClick={this.Others} 
        disabled ={!this.state.show}>Others</button> 
      
      <div>
        {this.state.show ? <Post/>:'wfwafawf'}
        </div>
        </div>
  

        );
      }
    }
    

      
        
    

        
  export default App;
