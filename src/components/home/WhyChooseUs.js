import React, { useState, useEffect } from 'react'
import useCheckDevice from '@/custom-hooks/CheckDevice'
import ResponsiveCarousel from '../Slider'
import Wrap from '../Wrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckToSlot, faPersonCircleCheck, faMoneyBill1Wave, faCar, faList } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-regular-svg-icons'

const WhyChooseUs = () => {
    const checkDevice = useCheckDevice();
    const [windowWidth, setWindowWidth] = useState(1280)

    useEffect(() => {
        setWindowWidth(prev => checkDevice)
    }, [checkDevice])

    return (
        <Wrap extendClassName="lg:flex lg:flex-row items-center justify-center gap-x-20 gap-y-12 mt-12 lg:mt-32 lg:mb-24">
            <div className="text-center px-1">
                <h2 className="text-4xl lg:text-[60px] font-bold mb-8 lg:mb-12">Zašto izabrati nas?</h2>
                {windowWidth < 1280 ? (
                    <ResponsiveCarousel className="px-2">
                        <div className="flex flex-col gap-y-4 items-center pb-12">
                            <div className="diamond">
                                <FontAwesomeIcon icon={faCheckToSlot} className="icon w-10" />
                            </div>
                            <h3 className="text-lg font-bold">ZAGARANTOVANA BEZBJEDNOST</h3>
                            <p className="p-break-words">Obuka se vrši na vozilima sa najnovijim bezbjednosnim sistemima, te vam garantujemo potpunu bezbjednost tokom obuke.</p>
                        </div>
                        <div className="flex flex-col gap-y-4 items-center pb-12">
                            <div className="diamond">
                                <FontAwesomeIcon icon={faPersonCircleCheck} className="icon w-10" />
                            </div>
                            <h3 className="text-lg font-bold">STRUČNI INSTRUKTORI</h3>
                            <p className="p-break-words">Naši rezultati najbolje govore o nama, upišite se u našu školu i uvjerite se.</p>
                        </div>
                        <div className="flex flex-col gap-y-4 items-center pb-12">
                            <div className="diamond">
                                <FontAwesomeIcon icon={faClock} className="icon w-10" />
                            </div>
                            <h3 className="text-lg font-bold">TERMINI PRILAGOĐENI KANDIDATIMA</h3>
                            <p className="p-break-words">Termine predavanja i obuke prilagođavamo našim kandidatima.</p>
                        </div>
                        <div className="flex flex-col gap-y-4 items-center pb-12">
                            <div className="diamond">
                                <FontAwesomeIcon icon={faMoneyBill1Wave} className="icon w-10" />
                            </div>
                            <h3 className="text-lg font-bold">PRISTUPAČNE CIJENE</h3>
                            <p className="p-break-words">Kandidatima nudimo prisupačne cijene obuke, mogućnost plaćanja u ratama i bez skrivenih troškova.</p>
                        </div>
                        <div className="flex flex-col gap-y-4 items-center pb-12">
                            <div className="diamond">
                                <FontAwesomeIcon icon={faList} className="icon w-10" />
                            </div>
                            <h3 className="text-lg font-bold">OBUKA ZA VIŠE KATEGORIJA</h3>
                            <p className="p-break-words">Vršimo obuku kandidata za vozače za A, B, C1, C, CE kategorije / potkategorije.</p>
                        </div>
                        <div className="flex flex-col gap-y-4 items-center pb-12">
                            <div className="diamond">
                                <FontAwesomeIcon icon={faCar} className="icon w-10" />
                            </div>
                            <h3 className="text-lg font-bold">NOVA I KVALITETNA VOZILA</h3>
                            <p className="p-break-words">Obuka se vrši na novim i udobnim vozilima, redovno se održavaju i mijenjaju na svakih par godina.</p>
                        </div>
                    </ResponsiveCarousel>
                ) : (
                    <>
                        <div className="flex flex-row gap-x-24 pt-12">
                            <div className="flex flex-col gap-y-4 items-center w-full">
                                <div className="diamond">
                                    <FontAwesomeIcon icon={faCheckToSlot} className="icon w-10" />
                                </div>
                                <h3 className="text-lg font-bold">ZAGARANTOVANA BEZBJEDNOST</h3>
                                <p>Obuka se vrši na vozilima sa najnovijim bezbjednosnim sistemima, te vam garantujemo potpunu bezbjednost tokom obuke.</p>
                            </div>
                            <div className="flex flex-col gap-y-4 items-center w-full">
                                <div className="diamond">
                                    <FontAwesomeIcon icon={faPersonCircleCheck} className="icon w-10" />
                                </div>
                                <h3 className="text-lg font-bold">STRUČNI INSTRUKTORI</h3>
                                <p>Naši rezultati najbolje govore o nama, upišite se u našu školu i uvjerite se.</p>
                            </div>
                            <div className="flex flex-col gap-y-4 items-center w-full">
                                <div className="diamond">
                                    <FontAwesomeIcon icon={faClock} className="icon w-10" />
                                </div>
                                <h3 className="text-lg font-bold">TERMINI PRILAGOĐENI KANDIDATIMA</h3>
                                <p>Termine predavanja i obuke prilagođavamo našim kandidatima.</p>
                            </div>
                        </div>
                        <div className="flex flex-row gap-x-24 pt-12">
                            <div className="flex flex-col gap-y-4 items-center w-full">
                                <div className="diamond">
                                    <FontAwesomeIcon icon={faMoneyBill1Wave} className="icon w-10" />
                                </div>
                                <h3 className="text-lg font-bold">PRISTUPAČNE CIJENE</h3>
                                <p>Kandidatima nudimo prisupačne cijene obuke, mogućnost plaćanja u ratama i bez skrivenih troškova.</p>
                            </div>
                            <div className="flex flex-col gap-y-4 items-center w-full">
                                <div className="diamond">
                                    <FontAwesomeIcon icon={faList} className="icon w-10" />
                                </div>
                                <h3 className="text-lg font-bold">OBUKA ZA VIŠE KATEGORIJA</h3>
                                <p>Vršimo obuku kandidata za vozače za A, B, C1, C, CE kategorije / potkategorije.</p>
                            </div>
                            <div className="flex flex-col gap-y-4 items-center w-full">
                                <div className="diamond">
                                    <FontAwesomeIcon icon={faCar} className="icon w-10" />
                                </div>
                                <h3 className="text-lg font-bold">NOVA I KVALITETNA VOZILA</h3>
                                <p>Obuka se vrši na novim i udobnim vozilima, redovno se održavaju i mijenjaju na svakih par godina.</p>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </Wrap>
    )
}

export default WhyChooseUs
