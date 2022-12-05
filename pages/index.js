import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from '../components/nav.js';
import Header from '../components/header.js';
import About from '../components/about.js';
import Skills from '../components/skills.js';
import Projects from '../components/projects.js';
import Services from '../components/services.js';
import Recommendations from '../components/recommendations.js';
import Contact from '../components/contact.js';
import Footer from '../components/footer.js';

export default function Home({data}) {

  return (
    <div>
      <Navigation/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Recommendations/>
      <Contact/>
      <Footer/>
    </div>
  )
}
