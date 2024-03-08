import React from 'react'
import Wrap from '../Wrap'

const InfoBar = () => {
  return (
    <div style={{ backgroundImage: `url('/tt-foter-bg.jpg')` }} className="py-8 text-white mt-8 lg:mt-0">
      <Wrap extendClassName={"flex flex-row justify-between"}>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </Wrap>
    </div>
  )
}

export default InfoBar
