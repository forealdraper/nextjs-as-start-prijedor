import React from "react";
import Wrap from "../Wrap";
import Link from "next/link";

const AreYouReady = () => {
  return (
    <Wrap extendClassName="flex flex-col lg:flex-row-reverse items-center gap-x-20 gap-y-12 mt-12 lg:mt-24 lg:mb-24">
      <div className="lg:w-[90%] text-center lg:text-left">
        <h1 className="text-4xl lg:text-[60px] font-bold mb-8 lg:mb-12">
          Da li ste spremni?
        </h1>
        <p>
          <strong>Auto škola Start Prijedor</strong> vam nudi visokokvalitetnu obuku za
          vozače svih kategorija, uključujući A, B, C1, C i CE, uz upotrebu
          novih i bezbjednih vozila koja garantiraju sigurno i efikasno učenje.
          Naša obuka je prilagođena kako početnicima, tako i vozačima koji žele
          obnoviti svoje znanje i vještine.
        </p>
        <p>
          Osim toga, omogućavamo <em>fleksibilno plaćanje na više rata</em> kako
          bismo olakšali vašu obuku i učinili je pristupačnijom. Takođe, nudimo
          mogućnost dopunske obuke za neaktivne vozače, kako na našem vozilu,
          tako i na vašem, čime vam omogućavamo personalizovan pristup učenju.
        </p>
        <p className="mb-8 lg:mb-12">
          U <strong>Auto školi Start Prijedor</strong>, sigurnost i kvalitet obuke su naš
          prioritet. Naši instruktori su iskusni, strpljivi i posvećeni tome da
          vam pruže najbolju obuku koja će vas pripremiti za sigurnu vožnju na
          cesti. Pridružite nam se i steknite vozačku dozvolu s povjerenjem!
        </p>

        <Link title="Pocni sa obukom" href="/kontakt">
          <button className="px-6 py-3 rounded-lg border-2 border-primary bg-primary text-white hover:text-primary hover:bg-white transition duration-300">
            POČNI SA OBUKOM
          </button>
        </Link>
      </div>
      <div className="w-full flex justify-center">
        <img src="/auta.png" alt="cars-image" />
      </div>
    </Wrap>
  );
};

export default AreYouReady;
