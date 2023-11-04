import React from 'react'
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import "./Home.less"
import my from '../../Assests/my.png'
const Home = () => {
  return (
   <>
   <div className='header'>
    <div className='listIcon'><ReorderRoundedIcon/></div>
  
   </div>
   <div className='homeBody'>
<img src={my} className='myImage' alt='myImage'/>
   </div>
   </>
  )
}

export default Home;