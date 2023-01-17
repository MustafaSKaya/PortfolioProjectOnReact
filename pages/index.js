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

  //console.log("dynamicProps are ", props);

  return (
    <div>
      <Head>
        <title>MustafaSKaya</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#fffd00"></link>
        <meta name="msapplication-TileColor" content="#ffc40d"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Navigation navTitle={props.navTitle}/>
      <Header headerQuote1={props.headerQuote1} headerQuote2={props.headerQuote2}/>
      <About aboutName={props.aboutName} aboutProfession={props.aboutProfession} aboutPPhoto={props.aboutPPhoto} aboutSummary={props.aboutSummary} aboutPhilosophy={props.aboutPhilosophy} githubLink={props.githubLink} linkedinLink={props.linkedinLink} aboutCharacterHeadlines={props.aboutCharacterHeadlines}/>
      <Skills skillsHeadline={props.skillsHeadline} skills={props.skills}/>
      <Projects projectHeadline={props.projectHeadline} projectHeadlineDesc={props.projectHeadlineDesc} projectButtons={props.projectButtons} projects={props.projects}/>
      <Services servicesHeadline={props.servicesHeadline} servicesHeadlineDesc={props.servicesHeadlineDesc} backEndDevDesc={props.backEndDevDesc} frontEndDevDesc={props.frontEndDevDesc} unitTestingDesc={props.unitTestingDesc}/>
      <Recommendations recomHeadline={props.recomHeadline} recomHeadlineDesc={props.recomHeadlineDesc} recommendations={props.recommendations}/>
      <Contact contactHeadline={props.contactHeadline} contactHeadlineDesc={props.contactHeadlineDesc} contactEmail={props.contactEmail} contactWhereabouts={props.contactWhereabouts}/>
      <Footer githubLink={props.githubLink} linkedinLink={props.linkedinLink} footerNote={props.footerNote}/>
    </div>
  )
}
