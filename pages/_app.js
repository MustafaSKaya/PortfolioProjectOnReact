import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

function Loading() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined') {
      setLoading(true);
    } else {
      setTimeout(() => { setLoading(false) }, 5000)
    }
  }, []);

  if (loading) {
    return (
      <AnimatePresence>
        <motion.div layout initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}
        className="spinner-wrapper">
          <div className="spinner"></div>
        </motion.div>
      </AnimatePresence>
    )
  } else {
    return
  }
};

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Loading /><Component {...pageProps} />
    </>
  );
}

export default MyApp
