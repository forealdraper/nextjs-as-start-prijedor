import React from 'react'
import Wrap from '../Wrap'
import Link from 'next/link'

const AreYouReady = () => {
    return (
        <Wrap extendClassName="flex flex-col lg:flex-row-reverse items-center gap-x-20 gap-y-12 mt-12 lg:mt-24 lg:mb-24">
            <div className="lg:w-[90%] text-center lg:text-left">
                <h1 className="text-4xl lg:text-[60px] font-bold mb-8 lg:mb-12">Da li ste spremni?</h1>
                <p className="mb-8 lg:mb-12">Auto škola Start vam nudi obuku kandidata za vozače za A, B, C1, C i CE kategorije na novim i bezbjednim vozilima,
                    mogućnost plaćanja na više rata i obavljanje dopunske obuke za neaktivne vozače na našem ili vašem vozilu.</p>
                <Link href="/kontakt">
                    <button className="px-6 py-3 rounded-lg border-2 border-primary bg-primary text-white hover:text-primary hover:bg-white transition duration-300">POČNI SA OBUKOM</button>
                </Link>
            </div>
            <div className="w-full flex justify-center">
                <img src="/auta.png" alt="cars-image" />
            </div>
        </Wrap>
    )
}

export default AreYouReady
