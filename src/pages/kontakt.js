import React from 'react'
import Wrap from '@/components/Wrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'
import Head from 'next/head'

const Kontakt = () => {
  return (
    <>
      <Head>
        <title>Kontakt - Auto Škola Start Prijedor - Driving School Start Prijedor</title>
        <link rel="canonical" href="https://asstartprijedor.com/kontakt/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index"></meta>
        <meta property="og:title" content="Kontakt - Auto Škola Start Prijedor - Driving School Start Prijedor" />
        <meta property="og:url" content="https://asstartprijedor.com/kontakt/" />
      </Head>
      
      <div className="border-t-2 border-secondary w-full"></div>
      <Wrap extendClassName="mt-8 lg:mt-16 lg:mb-16 min-h-[40vh] ">
        <h1 className="text-4xl lg:text-[60px] font-bold text-center mb-8 lg:mb-16">Kontakt</h1>
        <p className="text-left lg:text-center mb-8 lg:mb-16 lg:text-lg">Za više informacija pozovite nas na sledeći broj ili nas posetite na našoj adresi u toku našeg radnog vremena.</p>
        <div className="flex flex-col lg:flex-row lg:justify-around gap-y-8">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-xl font-bold">Adresa</h3>
            <div className="flex flex-row gap-x-4">
              <FontAwesomeIcon icon={faLocationDot} className="w-6" />
              <p className="pt-1 lg:pt-0">Branislava Nušića 1, Prijedor 79101</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-xl font-bold">Tel</h3>
            <div className="flex flex-row gap-x-4">
              <FontAwesomeIcon icon={faPhoneVolume} className="w-6" />
              <p>065/529-314 || 066/255-432</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-2">
            <h3 className="text-xl font-bold">Radno Vrijeme</h3>
            <div className="flex flex-row gap-x-4">
              <FontAwesomeIcon icon={faClock} className="w-6" />
              <p>Pon-Sub 08:00 - 14:00</p>
            </div>
          </div>
        </div>
      </Wrap>
    </>
  )
}

export default Kontakt
