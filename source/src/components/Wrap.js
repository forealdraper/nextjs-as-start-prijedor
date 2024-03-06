import React from 'react'

const Wrap = ({children, extendClassName}) => {
  return (
    <div className={`mx-auto max-w-7xl px-3 ${extendClassName}`}>
      {children}
    </div>
  )
}

export default Wrap 
