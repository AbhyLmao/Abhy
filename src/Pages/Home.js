import React from 'react'
import Footer from '../Components/Footer.js'
import Linkshome from '../Components/Linkshome.js'
//src='https://avatars.githubusercontent.com/u/95217195?s=400&u=61176073d593e96d1322f75ae39463f49e004efc&v=4'
function Home() {
  return (
    <div className='containerlol'>
      <div className=''>
        <div className='homecontent'>
            <div className='imagecontainer'>
            <img src='https://avatars.githubusercontent.com/u/95217195?s=400&u=55d1ffb64ce1d313fe5d12b2c9afce37e4a1cdaf&v=4' className='profilelol'/>
            </div>
            <div className='hometext'>
                <h1><span className='magic'>Hello! I'm Abhy</span></h1>
                <p>
                    I'm a passionate software developer and a 3rd year engineering student based in Calgary, AB&nbsp; 🇨🇦
                    <br/>
                    <br/>    
                    Check out my Github, all of my projects are there!
                    I have worked with technologies like AWS, Terraform, React, Python, C/C++, and Java. 
                    <br /><br />And feel free to contact me&nbsp;&nbsp;&nbsp; ❤️
                    
                </p>
            </div>
        </div>
        
        <Linkshome />
          
        </div>
    </div>
  )
}

export default Home