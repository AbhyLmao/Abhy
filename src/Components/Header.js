import React from 'react'


function Header() {
  return (
    <div className='headlol'>

      <div className='headname'>
        <h1 className='namelol'>Clairo.dev</h1>
      </div>


      <div className='headbuttons'>
        
        <div className='buttonlol'>
        <a href='youtube.com'>
          <span className="material-symbols-outlined">
            rocket_launch
          </span>
        </a>
        </div>
        <div className='buttonlol'>
        <a>
          <span className="material-symbols-outlined">
            history_edu
          </span>
        </a>
        </div>
        <div className='buttonlol'>
        <a>
          <span className="material-symbols-outlined">
            sentiment_content
          </span>
        </a>
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