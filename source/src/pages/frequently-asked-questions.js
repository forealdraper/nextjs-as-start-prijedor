import React from 'react'
import Wrap from '@/components/Wrap'
import Accordion from '@/components/Accordion'
import Head from 'next/head'

const Frequently_Asked_Questions = () => {
  return (
    <>
      <Head>
        <title>Česta Pitanja - Auto Škola Start Prijedor - Driving School Start Prijedor</title>
        <link rel="canonical" href="https://asstartprijedor.com/frequently-asked-questions/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index"></meta>
        <meta property="og:title" content="Česta Pitanja - Auto Škola Start Prijedor - Driving School Start Prijedor" />
        <meta property="og:description" content="Česta Pitanja Koliko traje ukupan proces osposobljavanja za vozačku dozvolu B kategorije? Proces osposobljavanja za vozačku dozvolu B kategorije od dana upisa u auto školu do izlaska na ispit iz vožnje traje 2 mjeseca. Koliko traju predavanja iz teoretske nastave? Predavanja iz teoretske nastave traju 10 radnih dana, odnosno 28 nastavnih časova za B kategoriju. [&hellip;]" />
        <meta property="og:url" content="https://asstartprijedor.com/frequently-asked-questions/" />
      </Head>

      <div className="border-t-2 border-secondary w-full"></div>
      <Wrap extendClassName="mt-8 lg:mt-16 lg:mb-16">
        <h1 className="text-4xl lg:text-[60px] font-bold text-center mb-8 lg:mb-16">Česta Pitanja</h1>
        <Accordion
          title="Koliko traje ukupan proces osposobljavanja za vozačku dozvolu B kategorije?"
          text="Proces osposobljavanja za vozačku dozvolu B kategorije od dana upisa u auto školu do izlaska na ispit iz vožnje traje 2 mjeseca.">
        </Accordion>
        <Accordion
          title="Koliko traju predavanja iz teoretske nastave?"
          text="Predavanja iz teoretske nastave traju 10 radnih dana, odnosno 28 nastavnih časova za B kategoriju.">
        </Accordion>
        <Accordion
          title="Kako ću znati da li sam spreman za izlazak na ispit iz testova?"
          text="U toku predavanja iz teoretske nastave svaki kandidat biva testiran prije izlaska na finalni ispit. Ukoliko kandidat za to vrijeme nije zadovoljio testiranje, izlazi na ispit sa narednom grupom.">
        </Accordion>
        <Accordion
          title="Gdje se održavaju predavanja iz prve pomoći?"
          text="Predavanja iz prve pomoći se održavaju u prostorijama Crvenog krsta one opštine u kojoj kandidat ima prijavljeno mjesto prebivališta.">
        </Accordion>
        <Accordion
          title="Kojim danima se polažu ispiti iz poznavanja propisa i prve pomoći?"
          text="Ispiti iz poznavanja propisa i prve pomoći se polažu srijedom.">
        </Accordion>
        <Accordion
          title="Ko vrši prijavu za ispite iz poznavanja propisa i prve pomoći?"
          text="Prijavu za ispite vrši auto škola uz prethodni dogovor sa kandidatom.">
        </Accordion>
        <Accordion
          title="Koliko važi ljekarsko uvjerenje?"
          text="Ljekarsko uvjerenje važi godinu dana od datuma vađenja ljekarskog uvjerenja.">
        </Accordion>
        <Accordion
          title="Da li je potrebno da kandidat bude punoljetan da bi pristupio procesu osposobljavanja za vožačku B kategorije?"
          text="Kandidati za polaganje vozačkog ispita mlađi od 18 godina mogu 3 mjeseca prije punoljetstva da slušaju teoretsku nastavu o saobraćajnim propisima i prvoj pomoći.">
        </Accordion>
        <Accordion
          title="Da li je potrebno da kandidat bude punoljetan da bi upravljao mopedom?"
          text="Ne, da bi kandidat upravljao mopedom mora imati navršenih 14 godina starosti i polaže ispit iz poznavanja propisa bez praktičnog dijela.">
        </Accordion>
        <Accordion
          title="Kada se može početi sa obukom iz vožnje?"
          text="Sa obukom kandidat može početi kada položi ispite iz poznavanja propisa i prve pomoći.">
        </Accordion>
        <Accordion
          title="Da li osobe koje nisu državljani Bosne i Hercegovine mogu pristupiti procesu osposobljavanja za vozačku B kategorije i šta im je potrebno?"
          text="Osobe koje nisu državljani BiH mogu pristupiti procesu osposobljavanja za vozačku B kategorije. Pored ljekarskog uvjerenja i kopije pasoša potrebno je da kandidat ima odobren stalni ili privremeni boravak na razdoblje ne kraće od 6 mjeseci.">
        </Accordion>
        <Accordion
          title="Da li osobe sa invaliditetom mogu pristupiti procesu osposobljavanja za vozačku B kategorije i šta im je potrebno?"
          text="Osobe sa invaliditetom mogu pristupiti osposobljavanju. Pored kopije lične karte i ljekarskog uvjerenja na kojem treba biti naznačeno da osoba ima određenu fizičku invalidnost, potrebno je i Rješenje o invaliditetu kandidata.">
        </Accordion>
        <Accordion
          title="Da li kandidat koji ima vožačku dozvolu B kategorije mora pohađati teoretsku nastavu i ispit iz poznavanja propisa ukoliko pristupa osposobljavanju za C1 kategoriju?"
          text="Da, kandidat koji već ima vozačku B kategorije mora odslušati 10 časova teoretske nastave i pristupiti polaganju ispita iz poznavanja propisa ukoliko pristupa procesu osposobljavanja za C1 kategoriju">
        </Accordion>
      </Wrap>
    </>
  )
}

export default Frequently_Asked_Questions
