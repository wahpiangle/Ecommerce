import React from 'react'

const Title = ({ text, subtitle }) => {
  return (
  <div className='block'>
    <div className='font-semibold text-3xl'>{text}</div>
    <p className='text-secondaryText mt-2'>{subtitle}</p>
  </div>
  )
}

export default Title