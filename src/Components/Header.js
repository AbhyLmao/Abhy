import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='headlol'>

      <div className='headname' >
        
        <h1 className='namelol'>Clairo.dev</h1>
        
      </div>


      <div className='headbuttons'>
      
        <div className='buttonlol'>
          <Link  to='/'>
            <span className="material-symbols-outlined">
              cottage
            </span>
          </Link>
        </div>

        
        <div className='buttonlol'>
        <Link to='/projects'>
          <span className="material-symbols-outlined">
            rocket_launch
          </span>
        </Link>
        </div>

        <div className='buttonlol'>
        <Link  to='/'>
          <span className="material-symbols-outlined">
            history_edu
          </span>
        </Link>
        </div>

        <div className='buttonlol'>
        <Link to='/about'>
          <span className="material-symbols-outlined">
            sentiment_content
          </span>
        </Link>
        </div>

        <div className='buttonlol'>
        <label className='darkbutton'>
          <span className="material-symbols-outlined">
           dark_mode
          </span>
        </label>
        </div>
      </div>
              
    </div>
    
  )
}

export default Header