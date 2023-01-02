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

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});

export async function getStaticProps() {

  const dynamicProps = await client.getEntries({ content_type: 'fckThis'});

  return {
    props: dynamicProps.items[0].fields
  }
}

export default function Home(props) {
  console.log("dynamicProps are ", props);

  const navTitle = props.navTitle;
  const headerQuote1 = props.headerQuote1;
  const headerQuote2 = props.headerQuote2;
  const aboutName = props.aboutName;
  const aboutProfession = props.aboutProfession;
  const aboutPPhoto = props.aboutPPhoto;
  const aboutSummary = props.aboutSummary;
  const aboutPhilosophy = props.aboutPhilosophy;
  const aboutCharacterHeadlines = props.aboutCharacterHeadlines
  const githubLink = props.githubLink;
  const linkedinLink = props.linkedinLink;

  return (
    <div>
      <Navigation navTitle={navTitle}/>
      <Header headerQuote1={headerQuote1} headerQuote2={headerQuote2}/>
      <About aboutName={aboutName} aboutProfession={aboutProfession} aboutPPhoto={aboutPPhoto} aboutSummary={aboutSummary} aboutPhilosophy={aboutPhilosophy} githubLink={githubLink} linkedinLink={linkedinLink} aboutCharacterHeadlines={aboutCharacterHeadlines} />
      <Skills/>
      <Projects/>
      <Services/>
      <Recommendations/>
      <Contact/>
      <Footer/>
    </div>
  )
}
