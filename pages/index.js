import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from './nav.js';
import Header from './header.js';
import About from './about.js';
import Skills from './skills.js';
import Projects from './projects.js';
import Services from './services.js';
import Recommendations from './recommendations.js';

export default function Home() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Recommendations/>
    </div>
  )
}
