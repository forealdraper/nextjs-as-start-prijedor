import React, { useState, useEffect } from 'react'
import useCheckDevice from '@/custom-hooks/CheckDevice'
import Wrap from './Wrap'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const checkDevice = useCheckDevice();
  const [windowWidth, setWindowWidth] = useState(1280);

  useEffect(() => {
    setWindowWidth(prev => checkDevice);
  }, [checkDevice])

  return (
    <div style={{ backgroundImage: `url('/tt-foter-bg.jpg')` }}>
      <Wrap extendClassName={"flex flex-1 flex-col lg:flex-row justify-between gap-y-8 py-8 text-tertiary text-center lg:text-left"}>
        <div>
          <Image src="/autofinal.png" className="w-full" alt="Logo Image" width={windowWidth > 576 ? 340 : 200} height={windowWidth > 576 ? 340 : 200}></Image>
        </div>
        <div className="flex flex-col lg:flex-row lg:justify-around lg:gap-x-14 items-center lg:items-start gap-y-4 font-bold">
          <div>
            <h4 className="text-xl lg:pb-2">Adresa</h4>
            <p>Branislava Nušića 1</p>
            <p>Prijedor 79101</p>
          </div>
          <div className="h-[180px] w-[1px] bg-secondary hidden lg:block"></div>
          <div>
            <h4 className="text-xl lg:pb-2">Tel</h4>
            <p>065/529-314</p>
            <p>066/255-432</p>
            <h4 className="text-xl pt-4 lg:pb-2">Radno Vrijeme</h4>
            <p>Pon-Sub 08:00 - 14:00</p>
          </div>
        </div>
        <div className='flex flex-col justify-around items-center lg:items-end text-white opacity-90'>
          <Link href="/" className="hover:text-tertiary transition duration-300">Početna</Link>
          <Link href="/" className="hover:text-tertiary transition duration-300">O Nama</Link>
          <Link href="/" className="hover:text-tertiary transition duration-300">Blog</Link>
          <Link href="/" className="hover:text-tertiary transition duration-300">Vozni park</Link>
          <Link href="/" className="hover:text-tertiary transition duration-300">Česta pitanja</Link>
          <Link href="/" className="hover:text-tertiary transition duration-300">Kontakt</Link>
        </div>
      </Wrap>
      <Wrap extendClassName="text-center lg:text-left text-lg text-tertiary pb-8">
        <p>© 2022 Auto škola Prijedor</p>
      </Wrap>
    </div>
  )
}

export default Footer
