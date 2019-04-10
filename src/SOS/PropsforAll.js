import React, {Component} from "react";
import PropTypes from 'prop-types';
import './Posts.css';

class Propforall extends Component{
  
  static propTypes = {
    username: PropTypes.string.isRequired,
    usrimage: PropTypes.string.isRequired,
    dateOfpub: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    typeOfEmr: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    postpct: PropTypes.string.isRequired

    };
    static defaultProps = {
    username: '-',
    usrimage: '-',
    dateOfpub:'--',
    location: 'safe place',
    typeOfEmr: 'Safe',
    rating:'Emergency'
    };

    constructor(){
      super();
    }

  render(){
const {username, dateOfpub,location,typeOfEmr,rating,postpct,usrimage} = this.props;


return (
   
    <div className='outset'>
        <div className='avatar'>
      {usrimage}
      </div> 
       
    
    
     
     
    <div className ='content'>
    <div className ='stream-item-header'>
    <div className = 'FullNameGroup'><div className='fullname hover__hover  color: #1DA1F2'>{username}</div>  </div>
    <div className = 'location'>{location}</div>
    <div className = 'time'>{dateOfpub}</div>
    <div className = 'typeOfEmr'>{typeOfEmr}</div>
    </div>

    

    <div className = 'rating'>{rating}</div>
  
  <div> <img src={require(postpct)}/> </div> 
    </div>
  
    </div>

  );
}
  }
export default Propforall;