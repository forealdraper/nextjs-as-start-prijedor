import React from 'react'
import Wrap from '@/components/Wrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const Kontakt = () => {
  return (
    <>
      <div className="border-t-2 border-secondary w-full"></div>
      <Wrap extendClassName="mt-8 lg:mt-16 lg:mb-16 min-h-[40vh] ">
        <h1 className="text-4xl lg:text-[60px] font-bold text-center mb-8 lg:mb-16">Kontakt</h1>
        <p className="text-left lg:text-center mb-8 lg:mb-16 lg:text-lg">Za više informacija pozovite nas na sledeći broj ili nas posetite na našoj adresi u toku našeg radnog vremena.</p>
        <div className="flex flex-col lg:flex-row lg:justify-around gap-y-8">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-xl font-bold">Adresa</h3>
            <div className="flex flex-row gap-x-4">
              <FontAwesomeIcon icon={faLocationDot} size={"xl"} />
              <p>Branislava Nušića 1, Prijedor 79101</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-xl font-bold">Tel</h3>
            <div className="flex flex-row gap-x-4">
              <FontAwesomeIcon icon={faPhoneVolume} size={"xl"} />
              <p>065/529-314 || 066/255-432</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-xl font-bold">Radno Vrijeme</h3>
            <div className="flex flex-row gap-x-4">
              <FontAwesomeIcon icon={faClock} size={"xl"} />
              <p>Pon-Sub 08:00 - 14:00</p>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default Kontakt
