import you from './images/you.jpg'
import searchicon from './images/you.jpg'
import prime from './images/prime.webp'
import pic from './images/pic.webp'
import icon from './images/icon.webp'
 
// import {AiFillHome} from 'react-icons/ai'
// import {SiYoutubemusic} from 'react-icons/ai'
// import {BsFillMicFill} from 'react-icons/ai'




function Home() {
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
      <div className="header-voice"> voice</div>
     
      
      
   
    <div className='header2'>
    {/* <AiFillHome size={100} color="black" />
    {/* <p>Home</p> */}
    {/* <SiYoutubemusic size={100} color="black"/> */} 

    </div>
    <div className="header3">
      <div className="content1">
      <img className='content'src={prime}/>
      </div>
      <div className="content1">
      <img className='content'src={pic}/>
      </div>
      <div className="content1">
      <img className='content'src={prime}/>
      </div>
      <div className="content1">
      <img className='content'src={pic}/> 

      </div>
      <div className="content1">
      <img className='content'src={prime}/>
      </div>
      <div className="content1">
      <img className='content'src={pic}/>
      </div>
      <div className="content1">
      <img className='content'src={prime}/>
      </div>
      <div className="content1">
      <img className='content'src={pic}/>
      </div>
      <div className="content1">
      <img className='content'src={prime}/>
      </div>
     
   </div>
 

      </div>
    )
}
export default Home;