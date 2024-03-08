import React, { useState, useEffect } from 'react'
import useCheckDevice from '@/custom-hooks/CheckDevice'
import ResponsiveCarousel from '../Slider'
import Wrap from '../Wrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faHandshake } from '@fortawesome/free-regular-svg-icons'
import { faBriefcase } from '@fortawesome/free-solid-svg-icons'

const InfoBar = () => {
  const checkDevice = useCheckDevice();
  const [windowWidth, setWindowWidth] = useState(1280)

  useEffect(() => {
    setWindowWidth(prev => checkDevice)
  }, [checkDevice])

  return (
    <div style={{ backgroundImage: `url('/tt-foter-bg.jpg')` }} className="lg:py-8 text-white mt-8 lg:mt-0">
      <Wrap extendClassName={"flex flex-row justify-between"}>
        {windowWidth < 1280 ? (
          <ResponsiveCarousel>
            <div className="flex flex-row items-center justify-center gap-x-4 pt-4 pb-12">
              <FontAwesomeIcon icon={faClock} size="2xl" color="white" />
              <div className="flex flex-col text-left">
                <p className="text-2xl font-bold">54,000+</p>
                <p className="font-bold">SATI RADA</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-4 pt-4 pb-12">
              <FontAwesomeIcon icon={faHandshake} size="2xl" color="white" />
              <div className="flex flex-col text-left">
                <p className="text-2xl font-bold">25</p>
                <p className="font-bold">GODINA RADA</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-4 pt-4 pb-12">
              <FontAwesomeIcon icon={faBriefcase} size="2xl" color="white" />
              <div className="flex flex-col text-left">
                <p className="text-2xl font-bold">2000+</p>
                <p className="font-bold">OBUČENIH KANDIDATA</p>
              </div>
            </div>
          </ResponsiveCarousel>
        ) : (
          <div className="flex flex-row space-between w-full">
            <div className="flex flex-row items-center justify-center gap-x-6 py-4 w-full">
              <FontAwesomeIcon icon={faClock} color="white" className="text-4xl"/>
              <div className="flex flex-col text-left">
                <p className="text-4xl font-bold">54,000+</p>
                <p className="text-xl font-bold">SATI RADA</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-6 py-4 w-full">
              <FontAwesomeIcon icon={faHandshake} color="white" className="text-4xl" />
              <div className="flex flex-col text-left">
                <p className="text-4xl font-bold">25</p>
                <p className="text-xl font-bold">GODINA RADA</p>
              </div>
            </div>
            <div className="flex flex-row items-center justify-center gap-x-6 py-4 w-full">
              <FontAwesomeIcon icon={faBriefcase} color="white" className="text-4xl" />
              <div className="flex flex-col text-left">
                <p className="text-4xl font-bold">2000+</p>
                <p className="text-xl font-bold">OBUČENIH KANDIDATA</p>
              </div>
            </div>
          </div>
        )}

      </Wrap>
    </div>
  )
}

export default InfoBar
