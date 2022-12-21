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
import { createClient } from 'contentful';

const client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {

  const dynamicProps = await client.getEntries({ content_type: 'fckThis'});

  return {
    props: {
      dynamicProps: dynamicProps
    }
  }
}

export default function Home({data, dynamicProps}) {
  console.log("dynamicProps are ", dynamicProps.items[0].fields);

  const navBrand = dynamicProps.items[0].fields.brandTitle;

  return (
    <div>
      <Navigation brand={navBrand}/>
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
