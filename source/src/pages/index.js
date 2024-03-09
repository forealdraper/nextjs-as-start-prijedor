import InfoBar from "@/components/home/InfoBar";
import AreYouReady from "@/components/home/AreYouReady";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ScheduleBar from "@/components/home/ScheduleBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Auto Škola Start Prijedor - Driving School Start Prijedor</title>
        <link rel="canonical" href="https://asstartprijedor.com/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index"></meta>
        <meta property="og:title" content="Home - Auto Škola Start Prijedor - Driving School Start Prijedor" />
        <meta property="og:description" content="54,000+ Sati rada 25 Godina rada.. 2,000+ Obučenih Kandidata.. Da li ste spremni? Auto škola Start vam nudi obuku kandidata za vozače za A, B, C1, C i CE kategorije na novim i bezbjednim vozilima, mogućnost plaćanja na više rata i obavljanje dopunske obuke za neaktivne vozače na našem ili vašem vozilu. Počni sa obukom Zašto izabrati nas? [&hellip;]" />
        <meta property="og:url" content="https://asstartprijedor.com/" />
      </Head>
      
      <InfoBar />
      <AreYouReady />
      <WhyChooseUs />
      <ScheduleBar />
    </>
  );
}
