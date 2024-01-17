import React from 'react'

function Projects() {
  return (
    <div>
      <div className='PageHeader'>Projects</div>

      <div className='ProjectContainer'> 
      <div className='type'>
        <div />
        <div className='Project'>
          <div>
          <div className='Project-title'>Zoo Schedule Maker</div>
          <div className='Project-body'>An Automated Schedule Maker made for a Zoo written in Java with mySQL connection</div>
          </div>
          <div>
          <img src='https://t3.ftcdn.net/jpg/03/30/79/66/360_F_330796602_x5h8unLknqLs3mmKhYXbEu6gucdN7SJv.jpg' className='Project-pic'/>
          </div>
        </div>
      </div>

      <div className='type'>
        <div className='Project'>
          <div>
          <div className='Project-title'>Museum Python DBMS</div>
          <div className='Project-body'>Python and MySQL Museum Database Management program. offering different levels of permissions for various user roles, 
          </div>
           </div>
           <div>
          <img src='https://thumbs.dreamstime.com/b/museum-logo-trendy-minimal-linear-style-vector-icon-bank-building-columns-simple-emblem-university-isolated-177740902.jpg' className='Project-pic'/>
          </div>
        </div>
      </div>


      <div className='type'>
        <div className='Project'>
        <div>
          <div className='Project-title'>Wordle Clone</div>
          <div className='Project-body'>A clone of the hit game Wordle made with vanilla javascript utilising an API for words and hints.</div>
          </div>
          <div>
          <img src='https://static01.nyt.com/images/2022/03/02/crosswords/alpha-wordle-icon-new/alpha-wordle-icon-new-square320-v3.png?format=pjpg&quality=75&auto=webp&disable=upscale' className='Project-pic'/>
          </div>
        </div>
      </div>

        <div className='type'>
        <div className='Project'>
        <div>
          <div className='Project-title'>Country data grapher </div>
          <div className='Project-body'>A clone of the hit game Wordle made with vanilla javascript utilising an API for words and hints.</div>
          </div>
          <div>
          <img src='https://png.pngtree.com/png-vector/20190331/ourlarge/pngtree-graph-icon-line-design--business-icon-vector-design-png-image_902145.jpg' className='Project-pic'/>
          </div>
        </div>
        </div>


      </div>
    </div>
  )
}

export default Projects