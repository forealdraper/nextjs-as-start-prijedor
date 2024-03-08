import React from 'react'
import Wrap from '@/components/Wrap'

const O_Nama = () => {
  return (
    <>
    <div className="border-t-2 border-secondary w-full"></div>
      <Wrap extendClassName="mt-8 lg:mt-16 lg:mb-16">
        <h1 className="text-4xl lg:text-[60px] font-bold text-center mb-8 lg:mb-16">O Nama</h1>
        <div className="flex flex-col gap-y-4">
          <p className="font-bold text-secondary"> Auto škola Start je osnovana u Prijedoru 1997. godine i jedna je od najstarijih auto škola u gradu. </p>
          <p className="font-bold text-secondary"> Auto škola Start konstanto radi na usavršavanju obuke za vozače, te Vam garantujemo stručne i motivisane istruktore koji će se potruditi da svaki kandidat postane dobar i samostalan vozač. </p>
          <p className="font-bold text-secondary"> Smatramo da je zadovoljan kandidat najbolja reklama auto škole u kojoj je položio vožnju. </p>
          <p className="font-bold text-secondary"> Auto škola Start vam nudi:<br></br>
            Obuku vozača za A, B, C1, C i CE kategorije na novim i bezbjednim vozilima,<br></br>
            mogućnost plaćanja na više rata,<br></br>
            obavljanje dopunske obuke za neaktivne vozače na našem ili vašem vozilu.</p>
        </div>
      </Wrap>
    </>
  )
}

export default O_Nama
