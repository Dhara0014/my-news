import React from 'react'
import MyNavbar from './MyNavbar';

const MyNav = (props) => {

  return (    
    <div className={`bg-${props.mode === 'dark'?'dark':'light'} p-3 fixed-top`}>
        <div className="d-flex justify-content-start">
        <MyNavbar mode={props.mode} toggle={props.toggle}/>
        <span className="mb-0 h1 fs-2  mx-2" style={{color: '#CC0000'}}>DAILY-NEWS</span>
        </div>
</div>
  )
}

export default MyNav;