import React from 'react';
import './Navbar.css';
import {Nav,NavLink,Navbar} from 'reactstrap';
import Post from './Post';

//style={{backgroundColor: '#2c1564'}}
const NavBar= () => {
return (
    <Navbar style={{backgroundColor: '#2c1564'}}>
    <div>
    <div className="container"> 
      <a><h5>VatanDaş</h5></a>
      </div>

      <ul className = "right">
     <li><NavLink to ='/post'>Emergency</NavLink></li>
     <li><NavLink to ="/other">Others</NavLink></li>
      </ul>
      </div>
    </Navbar>

)
}
export default NavBar;
/*

   <nav className= "nav-wrapper grey darken-3">
<div className="container">

<Link to = '/' className="brand-logo ">VatanDaş</Link>

<Emergency/>
</div>


    </nav>


*/