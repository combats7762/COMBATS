// rfc react functional component
//rfce 


import React, { useEffect, useState } from 'react'
import Header from'./Header'
function Video() {
  

  return (
  <div>
    <div className="header1">
      <div className="flex-item1">
      
      </div>
      <div className="flex-item2" >
      <img className='flex-item2'src={you}/>
      </div>
      <div className="header-search">
      <input id="text" placeholder="Search.."/>
      <img className='icon' src={icon}/>  
      </div>
      <div className="header-voice">
<button  className='voice'>

BsFillMicFill
</button>
      </div>
      <div className="sign">
<button className='sig'></button>
      </div>
  </div>
   
  
);
  }
export default Video;
