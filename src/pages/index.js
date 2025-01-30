import InfoBar from "@/components/home/InfoBar";
import AreYouReady from "@/components/home/AreYouReady";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ScheduleBar from "@/components/home/ScheduleBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Početna - Auto Škola Start Prijedor</title>
        <link rel="canonical" href="https://asstartprijedor.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index"></meta>
        <meta
          property="og:title"
          content="Auto Škola Start Prijedor - Najbolja Auto Škola Prijedor"
        />
        <meta
          property="og:description"
          content="Auto škola Start vam nudi obuku kandidata za vozače za A,B,C1,C i CE kategorije na novim vozilima, mogućnost plaćanja na više rata i obavljanje dopunske obuke"
        />
        <meta property="og:url" content="https://asstartprijedor.com/" />

        <meta
          name="twitter:card"
          content="https://www.asstartprijedor.com/auta.png"
        />
        <meta
          name="twitter:title"
          content="Auto Škola Start Prijedor - Najbolja Auto Škola Prijedor"
        />
        <meta
          name="twitter:description"
          content="Auto škola Start vam nudi obuku kandidata za vozače za A,B,C1,C i CE kategorije na novim vozilima, mogućnost plaćanja na više rata i obavljanje dopunske obuke"
        />
        <meta
          name="twitter:image"
          content="https://www.asstartprijedor.com/auta.png"
        />

        {/* JSON-LD za strukturalne podatke */}
        <script type="application/ld+json">
          {`
            {
              "@context": "http://schema.org",
              "@type": "Organization",
              "name": "Auto Škola Start",
              "url": "https://asstartprijedor.com",
              "logo": "https://asstartprijedor.com/autofinal.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+38765529314",
                "contactType": "Customer Service",
                "areaServed": "BA",
                "availableLanguage": "sr"
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Branislava Nusica 1, Prijedor",
                "addressLocality": "Prijedor",
                "addressCountry": "BA"
              }
            }
          `}
        </script>
      </Head>

      <InfoBar />
      <AreYouReady />
      <WhyChooseUs />
      <ScheduleBar />
    </>
  );
}
