import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Navigation from './nav.js';
import DumbSection from './dumbsection';

export default function Home() {
  return (
    <div>
      <Navigation/>
      <DumbSection/>
    </div>
  )
}
