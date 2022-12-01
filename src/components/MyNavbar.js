import React from 'react'
import { NavLink } from 'react-router-dom';
import {TfiMenuAlt} from 'react-icons/tfi';

const MyNavbar = (props) => {
  return (
      <div>
    
      <button className="btn" style={{background: props.mode === 'dark'?'#343a40':'lightgray', color: props.mode === 'dark'?'white':'gray'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <TfiMenuAlt className='fs-4'/>
  </button>
    
    <div className={`offcanvas offcanvas-start show text-bg-${props.mode}`} data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel" style={{width: '23%'}}>
      <div className="offcanvas-header">
      
      <button className="btn" style={{background: props.mode === 'dark'?'#343a40':'lightgray', color: props.mode === 'dark'?'white':'gray'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
      <TfiMenuAlt className='fs-4'/>
  </button>

      <span className="mb-0 h1 fs-3  mx-2" style={{color: '#CC0000'}}>DAILY-NEWS</span>
        <button type="button" className={`btn-close ${props.mode === 'dark'? 'btn-close-white':'btn-close'}`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        
          <div><hr/>
            <div className="container my-3 py-2 rounded" style={{backgroundColor: props.mode === 'dark'? 'black': '#e9ecef'}}>
            <div className="form-check form-switch form-check-reverse">
            <input className="form-check-input" type="checkbox" id="mode" onClick={props.toggle}/>
            <label className={`form-check-label fs-5 text-${props.mode === 'dark'?'light':'dark'}`} htmlFor="mode">{props.mode}</label>
            </div>
            </div><hr/>
          </div>
            <div className='nav nav-idioma d-flex justify-content-center'>
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 mx-2 fs-5">
                <li className="nav-item">
                <NavLink activeClassName='active-link' className={`nav-link btn btn-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} to="/">Home</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={`nav-link btn btn-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} to="/business">Business</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={`nav-link btn btn-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} to="/entertainment" >Entertainment</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={`nav-link btn btn-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} to="/health">Health</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={`nav-link btn btn-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} to="/science">Science</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={`nav-link btn btn-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} to="/sports">Sports</NavLink>
              </li>
              <li className="nav-item">
              <NavLink className={`nav-link btn btn-${props.mode === 'dark'?'dark':'light'} text-${props.mode === 'dark'?'light':'dark'}`} to="/technology">Technology</NavLink>
              </li>
              </ul>
          </div>
          
        </div>
        </div>
        </div>
        )
      }
      
      export default MyNavbar;