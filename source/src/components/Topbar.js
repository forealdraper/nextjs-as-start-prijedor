import React from 'react';
import { useState, useEffect } from 'react';
import Wrap from './Wrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

const Topbar = () => {

    const [test, setTest] = useState(123);

    useEffect(() => {
        console.log(test);
    }, [test])

    return (
        <div className="bg-primary text-white">
            <Wrap extendClassName="flex flex-col lg:flex-row justify-between items-start gap-x-4 gap-y-4 py-3">
                <div className="flex gap-x-3 justify-center items-center">
                    <FontAwesomeIcon icon={faLocationDot} color="white" className="h-4" />
                    <p>Branislava Nušića 1, Prijedor 79101</p>
                </div>
                <a href="tel: 065/529-314" className="flex gap-x-3 justify-center items-center">
                    <FontAwesomeIcon icon={faPhoneVolume} color="white" className="h-4" />
                    <p>065/529-314</p>
                </a>
                <div className="flex gap-x-3 justify-center items-center">
                    <FontAwesomeIcon icon={faClock} color="white" className="h-4" />
                    <p> 08:00 - 14:00 PM Pon - Sub</p>
                </div>
                <div className="flex gap-x-6 justify-center items-center">
                    <a href="https://www.facebook.com/asstartprijedor/" target="blank">
                        <FontAwesomeIcon icon={faFacebookF} color="white" className="h-4" />
                    </a>
                    <a href="https://www.instagram.com/autoskolastart.pd" target="blank">
                        <FontAwesomeIcon icon={faInstagram} color="white" className="h-5" />
                    </a>
                </div>
            </Wrap>
        </div>
    )
}

export default Topbar
