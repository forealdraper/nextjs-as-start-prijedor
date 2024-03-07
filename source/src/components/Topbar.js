import React, { useState, useEffect } from 'react';
import useCheckDevice from '@/custom-hooks/CheckDevice';
import Wrap from './Wrap'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Topbar = () => {
    const checkDevice = useCheckDevice()
    const [windowWidth, setWindowWidth] = useState(1280);
    const [isActive, setIsActive] = useState(false);
    const toggleTopbar = () => {
        setIsActive(prev => !prev);
    }

    useEffect(() => {
        setWindowWidth(prev => checkDevice)
        if (checkDevice >= 1280) {
            setIsActive(true);
        }
    }, [checkDevice])

    return (
        <div className={`${windowWidth < 1280 ? "bg-white text-primary" : "bg-primary text-white"}`}>
            {isActive && (
                <Wrap extendClassName={`transition duration-300 flex flex-col lg:flex-row justify-between items-start gap-x-4 gap-y-4 py-3 `}>
                    <div className="flex gap-x-3 justify-center items-center">
                        <FontAwesomeIcon icon={faLocationDot} color={`${windowWidth < 1280 ? "#403c3c" : "white"}`} className="h-4" />
                        <p>Branislava Nušića 1, Prijedor 79101</p>
                    </div>
                    <Link href="tel: 065/529-314" className="flex gap-x-3 justify-center items-center">
                        <FontAwesomeIcon icon={faPhoneVolume} color={`${windowWidth < 1280 ? "#403c3c" : "white"}`} className="h-4" />
                        <p>065/529-314</p>
                    </Link>
                    <div className="flex gap-x-3 justify-center items-center">
                        <FontAwesomeIcon icon={faClock} color={`${windowWidth < 1280 ? "#403c3c" : "white"}`} className="h-4" />
                        <p> 08:00 - 14:00 PM Pon - Sub</p>
                    </div>
                    <div className="flex gap-x-6 justify-center items-center">
                        <Link href="https://www.facebook.com/asstartprijedor/" target="blank">
                            <FontAwesomeIcon icon={faFacebookF} color={`${windowWidth < 1280 ? "#403c3c" : "white"}`} className="h-4" />
                        </Link>
                        <Link href="https://www.instagram.com/autoskolastart.pd" target="blank">
                            <FontAwesomeIcon icon={faInstagram} color={`${windowWidth < 1280 ? "#403c3c" : "white"}`} className="h-5 pt-1" />
                        </Link>
                    </div>
                </Wrap>
            )}
            {windowWidth < 1280 && (
                <Wrap extendClassName="text-center py-3 bg-primary text-white">
                    <button type="button" onClick={toggleTopbar}>
                        <FontAwesomeIcon icon={faChevronDown} />
                    </button>
                </Wrap>
            )}
        </div>
    )
}

export default Topbar
