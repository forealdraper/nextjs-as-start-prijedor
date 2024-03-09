import React from 'react'
import Wrap from '@/components/Wrap'
import Card from '@/components/blog/Card'
import Head from 'next/head'

const Blog_Posts = () => {
  return (
    <>
      <Head>
        <title>Blog - Auto Škola Start Prijedor - Driving School Start Prijedor</title>
        <link rel="canonical" href="https://asstartprijedor.com/blog-posts/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index"></meta>
        <meta property="og:title" content="Blog - Auto Škola Start Prijedor - Driving School Start Prijedor" />
        <meta property="og:url" content="https://asstartprijedor.com/blog-posts/" />
      </Head>

      <div className="border-t-2 border-secondary w-full"></div>
      <Wrap extendClassName="mt-8 lg:mt-16 lg:mb-16">
        <h1 className="text-4xl lg:text-[60px] font-bold text-center mb-8 lg:mb-16">Blog</h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-x-4 gap-y-4 ">
          <Card
            src={"/blog1.jpg"}
            alt={"blog1"}
            href={"/2022/07/11/saobracajni-bonton-i-odgovornost-kao-preduslovi-za-bezbjednu-voznju"}
            h5={"SAOBRAĆAJNI BONTON I ODGOVORNOST KAO PREDUSLOVI ZA BEZBJEDNU VOŽNJU"}
            p={"Svi smo svjesni činjenice da niko od nas nije savršen vozač. Koliko god bilo vozačko iskustvo za nama, postoji “onaj jedan” trenutak nepažnje prema drugim"}
          />
          <Card
            src={"/blog2.png"}
            alt={"blog2"}
            href={"/2022/07/11/3-savjeta-za-bezbedno-putovanje-automobilom"}
            h5={"3 SAVJETA ZA BEZBEDNO PUTOVANJE AUTOMOBILOM"}
            p={"Nakon uspješno završene obuke u auto školi, većina razmišlja kako će samostalno krenuti na putovanje sa svojim automobilom. Ukoliko se spremate za ljetovanje ili planirate putovanje"}
          />
          <Card
            src={"/blog3.jpg"}
            alt={"blog3"}
            href={"/2022/07/11/kako-iz-prvog-pokusaja-poloziti-vozacki-ispit"}
            h5={"KAKO IZ PRVOG POKUŠAJA POLOŽITI VOZAČKI ISPIT"}
            p={"Dobijanje vozačke dozvole je uzbudljiv poduhvat i iskustvo koje mijenja život, ali je i velika odgovornost. Polaganje vozačkog ispita može biti malo stresno, ali postoje"}
          />
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch gap-x-4 gap-y-4 mt-4 ">
          <Card
            src={"/blog4.jpg"}
            alt={"blog4"}
            href={"/2022/07/11/savjeti-za-voznju-u-razlicitim-vremenskim-uslovima"}
            h5={"SAVJETI ZA VOŽNJU U RAZLIČITIM VREMENSKIM USLOVIMA"}
            p={"Uspješno ste položili vozački ispit i sad imate slobodu da se krećete na četiri točka sa svojom vozačkom dozvolom. Ako za vrijeme obuke niste imali"}
          />
          <Card
            src={"/blog5.jpg"}
            alt={"blog5"}
            href={"/2022/06/01/sta-treba-da-znate-ukoliko-ste-pali-vozacki-ispit"}
            h5={"ŠTA TREBA DA ZNATE UKOLIKO STE PALI VOZAČKI ISPIT?"}
            p={"Nije nimalo prijatno ukoliko na završnom testu vožnje ne prođete onako kako ste očekivali. Svakako Vaš neuspjeh ne treba da bude razlog da na samom"}
          />
        </div>

      </Wrap>
    </>

  )
}

export default Blog_Posts
