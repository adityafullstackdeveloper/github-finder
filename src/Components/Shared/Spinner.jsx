import React from 'react'
import spinner from '../../assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-auto'>
      <img src={spinner} width={180} className='text-center mx-auto' alt='Loading...'/>
    </div>
  )
}

export default Spinner
