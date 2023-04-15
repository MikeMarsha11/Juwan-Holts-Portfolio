import Head from 'next/head'
import Image from 'next/image'
import Intro from "/components/Intro";
import About from "/components/About";
import Header from "/components/Header";
import Skills from "/components/Skills";
import Portfolio from "/components/Portfolio";
import Experience from "/components/Experience";
import Contact from "/components/Contact";
import Footer from "/components/Footer";
import {useEffect} from "react";

 
export default function Home() {
  useEffect( () =>{
    const observer = new IntersectionObserver((entries, IntersectionObserverEntry, ) =>{
      entries.forEach(entry => {
        entry.target.classList.toggle( 'visible', entry.isIntersecting);
      });
    });
    observer.observe(document.querySelector('div.skills-container'));
    document.querySelectorAll('section').forEach(elem =>{
      observer.observe( elem );
    })
  }, []);

  return (
    <main>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </main>
  )
}