import React from 'react'
import Profilepic from '../images/womanportrait.jpg'






const ProfilePage = () => {
  return (
   
   
      
        <div className='container'>
            <span>
            <img src= {Profilepic} alt='' style={{width: '50px', margin: '10px'}}  /> 
            </span>

            <div className='profileId' >
                <p>60d0fe4f5311236168a109f5</p>
                <p>ms. Charlotte Legrand</p>
                
            </div>
        </div>
      
   
  )
}

export default ProfilePage