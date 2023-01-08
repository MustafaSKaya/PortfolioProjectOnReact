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
  const skillsHeadline = props.skillsHeadline;
  const skills = props.skills;
  const projectHeadline = props.projectHeadline;
  const projetcHeadlineDesc =  props.projectHeadlineDesc;
  const projectButtons = props.projectButtons;
  const projects = props.projects;
  const servicesHeadline = props.servicesHeadline;
  const servicesHeadlineDesc = props.servicesHeadlineDesc;
  const backEndDevDesc = props.backEndDevDesc;
  const frontEndDevDesc = props.frontEndDevDesc;
  const unitTestingDesc = props.unitTestingDesc;

  return (
    <div>
      <Navigation navTitle={navTitle}/>
      <Header headerQuote1={headerQuote1} headerQuote2={headerQuote2}/>
      <About aboutName={aboutName} aboutProfession={aboutProfession} aboutPPhoto={aboutPPhoto} aboutSummary={aboutSummary} aboutPhilosophy={aboutPhilosophy} githubLink={githubLink} linkedinLink={linkedinLink} aboutCharacterHeadlines={aboutCharacterHeadlines} />
      <Skills skillsHeadline={skillsHeadline} skills={skills}/>
      <Projects projectHeadline={projectHeadline} projectHeadlineDesc={projetcHeadlineDesc} projectButtons={projectButtons} projects={projects}/>
      <Services servicesHeadline={props.servicesHeadline} servicesHeadlineDesc={props.servicesHeadlineDesc} backEndDevDesc={props.backEndDevDesc} frontEndDevDesc={props.frontEndDevDesc} unitTestingDesc={props.unitTestingDesc}/>
      <Recommendations/>
      <Contact/>
      <Footer/>
    </div>
  )
}
