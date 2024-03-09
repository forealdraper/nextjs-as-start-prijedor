import React, { useState, useEffect } from 'react'
import useCheckDevice from '@/custom-hooks/CheckDevice'
import Link from 'next/link'
import Wrap from './Wrap'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const checkDevice = useCheckDevice();
  const [windowWidth, setWindowWidth] = useState(1280);
  const [isActive, setIsActive] = useState(false);
  const toggleNavbar = () => {
    setIsActive(prev => !prev);
  }

  useEffect(() => {
    setWindowWidth(prev => checkDevice);
    if (checkDevice >= 1280) {
      setIsActive(true);
    }
    if (isActive && windowWidth < 1280) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'hidden';
    }
  }, [checkDevice, isActive])

  return (
    <Wrap extendClassName={`flex flex-row lg:gap-x-20 justify-between py-8 relative`}>
      <img className={`${windowWidth > 576 ? "h-16 w-60" : "h-12 w-40"} hover:cursor-pointer `} src="/autofinal.png" alt="Logo Image" ></img>
      {windowWidth < 1280 && (
        <button type="button" onClick={toggleNavbar}>
          <FontAwesomeIcon icon={faBars} className="w-8 pr-2" />
        </button>
      )}
      <nav className={`transform transition duration-300 ${windowWidth >= 1280 ?
        "flex flex-row gap-x-10 items-center" :
        `absolute top-[140px] left-0 flex flex-col z-50 mx-0 px-0 bg-white h-[100vh] w-full ${!isActive ? 'translate-x-full ' : 'translate-x-0 '}`}`}>
        <Link onClick={windowWidth < 1280 ? toggleNavbar : ""} href="/" className={`${windowWidth < 1280 ? "my-link-mobile" : "my-link"}`}>POČETNA</Link>
        <Link onClick={windowWidth < 1280 ? toggleNavbar : ""} href="/o-nama" className={`${windowWidth < 1280 ? "my-link-mobile" : "my-link"}`}>O NAMA</Link>
        <Link onClick={windowWidth < 1280 ? toggleNavbar : ""} href="/blog-posts" className={`${windowWidth < 1280 ? "my-link-mobile" : "my-link"}`}>BLOG</Link>
        <Link onClick={windowWidth < 1280 ? toggleNavbar : ""} href="/vozni-park" className={`${windowWidth < 1280 ? "my-link-mobile" : "my-link"}`}>VOZNI PARK</Link>
        <Link onClick={windowWidth < 1280 ? toggleNavbar : ""} href="/frequently-asked-questions" className={`${windowWidth < 1280 ? "my-link-mobile" : "my-link"}`}>ČESTA PITANJA</Link>
        <Link onClick={windowWidth < 1280 ? toggleNavbar : ""} href="/kontakt" className={`${windowWidth < 1280 ? "my-link-mobile" : "my-link"}`}>KONTAKT</Link>
      </nav>
    </Wrap>
  )
}

export default Navbar
