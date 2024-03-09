import React from 'react'
import Wrap from '../Wrap'

const ScheduleBar = () => {
  return (
    <div style={{ backgroundImage: `url('/tt-foter-bg.jpg')` }} className="lg:py-8 text-white mt-8 lg:mt-0">
      <Wrap extendClassName={"flex flex-col lg:flex-row justify-center items-center gap-y-4 gap-x-8 py-4"}>
        <h4 className="text-3xl font-bold text-center">Zakažite časove vožnje sa nama<br></br>065/529-314</h4>
        <img src="/tt-promo-03-icon.png" alt="danger-icon" className="h-16 lg:h-full" />
      </Wrap>
    </div>
  )
}

export default ScheduleBar
