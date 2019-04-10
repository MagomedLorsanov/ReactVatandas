import React, { Component } from "react";
import './Post.css';
import Propforall from './PropsforAll';
import onfire from '.';

//import {CSSTransitionGroup} from  'react-transition-group'; 

class Post extends Component {

 

  constructor(){
  super();
  this.state={
   posts: [
  {username: 'maga', dateOfpub: '21.12.2019',
   location: 'esk/tech', typeOfEmr: 'Fire',
   rating :'55',usrimage :'l',postpct: '',id: 1},
   {username: 'Natig', dateOfpub: '2.12.2019',
   location: 'esk/Library', typeOfEmr: 'Gun shots',
   rating : '525',usrimage:'2l',postpct:{Download},id: 2},
          ]
    
  };
}
/*<Propforall       //should be bw   CSSTransitionGroup
//key = {postlar.key}
username= {postlar.username}
dateOfpub= {postlar.dateOfpub}
location= {postlar.location}
typeOfEmr= {postlar.typeOfEmr}
rating = {postlar.rating}
imageurl ={postlar.imageurl}
 >

</Propforall>*/
      render() {

    const {posts} = this.state; 
if (posts == null){     // CHANGE IT LATER... REMOVE ==NULL///////////
  console.log('Waiting for data');
  return( <h3>Be safe, Be with us...</h3>);
}else{

const postlar = posts.map(post=> {

return (

 /*<CSSTransitionGroup
         key={posts.id}
             transitionName='post'
              component='li'
              transitionAppear={true}
              transitionAppearTimeout={500}
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500} 
  >*/

<Propforall       
key={post.id}
username= {post.username}
dateOfpub= {post.dateOfpub}
location= {post.location}
typeOfEmr= {post.typeOfEmr}
rating = {post.rating}
usrimage ={post.usrimage}
postpct = {post.postpct} 
 >

</Propforall>
  
  // </CSSTransitionGroup>
  
)

});

      return (
        <div>

   {postlar}

        </div>
      );
        
  } 
}
}
    export default Post;