import Head from "next/head";
import { useEffect } from "react";
import About from "../components/About";
import Hero from "../components/Hero";
import Location from "../components/Location";
import OurSolution from "../components/OurSolution";
import Services from "../components/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Reference from "../components/Reference";
import ContactComp from '../components/Contact/ContactComp'

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 700,
    });
  }, []);

  return (
    <div>
      <Head>
        <title>BNM, Avtomobilska industrija, d.o.o.</title>
        <meta
          name="description"
          content="BNM, Avtomobilska industrija, d.o.o."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {/* === Hero section === */}
        <Hero />
        {/* === About section === */}
        <About />
        {/* === Services section === */}
        <Services />
        {/* === Our Solution section === */}
        {/* <OurSolution /> */}

        {/* === Our Refance section === */}
        <Reference />
        {/* === Gallery section === */}
        {/* <Gallery /> */}
        {/* === Location section */}
        <Location />
        {/* === Contact section === */}
        <ContactComp />
      </main>
    </div>
  );
}
