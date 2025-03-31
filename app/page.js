'use client'

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

import NavbarNew from "@/components/NavbarNew";
import Services from "@/components/Services";
import Work from "@/components/Work";





export default function Home() {
  return (
    <>
    <NavbarNew/>
    <Header/>
    <About/>
    <Services/>
    <Work/>
    <Contact/>
    <Footer/>

    </>


  );
}
