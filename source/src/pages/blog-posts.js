import React from 'react'
import Wrap from '@/components/Wrap'
import Card from '@/components/blog/Card'

const Blog_Posts = () => {
  return (
    <>
      <div className="border-t-2 border-secondary w-full"></div>
      <Wrap extendClassName="mt-8 lg:mt-16 lg:mb-16">
        <h1 className="text-4xl lg:text-[60px] font-bold text-center mb-8 lg:mb-16">Blog</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-x-4 gap-y-4 ">
          <Card 
            src={"/blog1.jpg"}
            alt={"blog1"}
            href={"/"}
            h5={"SAOBRAĆAJNI BONTON I ODGOVORNOST KAO PREDUSLOVI ZA BEZBJEDNU VOŽNJU"}
            p={"Svi smo svjesni činjenice da niko od nas nije savršen vozač. Koliko god bilo vozačko iskustvo za nama, postoji “onaj jedan” trenutak nepažnje prema drugim"}
          />
          <Card 
            src={"/blog2.png"}
            alt={"blog2"}
            href={"/"}
            h5={"3 SAVJETA ZA BEZBEDNO PUTOVANJE AUTOMOBILOM"}
            p={"Nakon uspješno završene obuke u auto školi, većina razmišlja kako će samostalno krenuti na putovanje sa svojim automobilom. Ukoliko se spremate za ljetovanje ili planirate putovanje"}
          />
          <Card 
            src={"/blog3.jpg"}
            alt={"blog3"}
            href={"/"}
            h5={"KAKO IZ PRVOG POKUŠAJA POLOŽITI VOZAČKI ISPIT"}
            p={"Dobijanje vozačke dozvole je uzbudljiv poduhvat i iskustvo koje mijenja život, ali je i velika odgovornost. Polaganje vozačkog ispita može biti malo stresno, ali postoje"}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-x-4 gap-y-4 mt-4 ">
        <Card 
            src={"/blog4.jpg"}
            alt={"blog4"}
            href={"/"}
            h5={"SAVJETI ZA VOŽNJU U RAZLIČITIM VREMENSKIM USLOVIMA"}
            p={"Uspješno ste položili vozački ispit i sad imate slobodu da se krećete na četiri točka sa svojom vozačkom dozvolom. Ako za vrijeme obuke niste imali"}
          />
          <Card 
            src={"/blog5.jpg"}
            alt={"blog5"}
            href={"/"}
            h5={"ŠTA TREBA DA ZNATE UKOLIKO STE PALI VOZAČKI ISPIT?"}
            p={"Nije nimalo prijatno ukoliko na završnom testu vožnje ne prođete onako kako ste očekivali. Svakako Vaš neuspjeh ne treba da bude razlog da na samom"}
          />
        </div>

      </Wrap>
    </>

  )
}

export default Blog_Posts
