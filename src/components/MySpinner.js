import React from 'react'
import spinner from '../spinner.gif';

const MySpinner = () => {
  return (
    
    <div className='text-center my-3'>
        <img src={spinner} alt="loading..." />
    </div>
  )
}

export default MySpinner