import React from 'react'
import Link from 'next/link'

const Card = ({ src, alt, href, h5, p }) => {
    return (
        <div className="flex flex-col justify-between gap-y-2 bg-[#f4f2fc] px-4 py-4 max-w-[400px]">
            <img src={src} alt={alt} className="w-full h-64" />
            <Link title="Naslov kartice" href={href}>
                <h5 className="text-[#4527a4] font-bold text-xl">{h5}</h5>
            </Link>
            <p>{p}</p>
            <Link title="Procitaj vise" href={href}>
                <button className="bg-[#8344c5] hover:bg-[#4527a4] text-white transition duration-300 py-2 rounded-sm w-full">PROČITAJ VIŠE</button>
            </Link>

        </div>
    )
}

export default Card
