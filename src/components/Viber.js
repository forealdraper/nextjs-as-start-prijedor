import React from 'react'

const Viber = () => {

    return (
        <a href="viber://chat?number=38766255432" className="fixed bottom-10 left-2 text-xl rounded-[50px] py-3 px-4 cursor-pointer transition duration-300 opacity-80 hover:opacity-100 z-50" >
            <img className="w-10 h-10 scale-150 rounded-[50px]" src="/viber.png" alt="Viber img"></img>
        </a>
    );
}

export default Viber
