import React from 'react'

function Header({ handleToggleDarkMode }) {
  return (
    <div className='header'>
      <h1>NOTES</h1>
      <button onClick={()=>handleToggleDarkMode((previousDarkmode)=>!previousDarkmode)} className='save'>Toggle Note</button>
    </div>
  )
}

export default Header
