import React from 'react'

function Button({styles}) {
  return (
    <button type='button' className={`py-6 px-6  bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded ${styles}`}>
      Get Started

    </button>
  )
}

export default Button