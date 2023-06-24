import React from 'react'
import Projecthome from '../Components/Projecthome'

function Home() {
  return (
    <div className='containerlol'>
      <div className=''>
        <div className='homecontent'>
            <div className='imagecontainer'>
            <img src='https://avatars.githubusercontent.com/u/95217195?v=4' className='profilelol'/>
            </div>
            <div className='hometext'>
                <h1>Hello! I'm Abhy test</h1>
                <p>
                    Hiya!, I'm a passionate Web developer and a 3rd year engineering student. 
                    I am based in Calgary, AB📍
                </p>
            </div>

            

        </div>
        <div className='homeProjects'>
          <Projecthome/>
        </div>
        </div>
    </div>
  )
}

export default Home