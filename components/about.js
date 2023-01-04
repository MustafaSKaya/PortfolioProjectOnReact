import Image from 'next/image';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About(props) {

    //console.log("aboutsection", props)

    const [aDelay, setADelay] = useState(1.5);

    const { ref, inView } = useInView();

    let delayMultiplier = 4;

    useEffect(() => {
        if ((typeof window !== "undefined") && (window.screen.width <= 990)) {
            setADelay(0);
        }
    })

    return (
        <section className="about padding4section" id="about">
            <AnimatePresence>
                <div className="container">
                    <div className='row'>
                        <div className='col-lg-8'>
                            <div className='row aboutRow '>
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                    animate={inView ? { y: 0, opacity: 1 } : ''}
                                    transition={{ duration: .75 }}
                                    className='col-8 aboutCol nameCol h-auto'>
                                    <div className='displayBottom'>
                                        <motion.h2 initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : ''}
                                            transition={inView ? { duration: .75, delay: aDelay * .5 } : ''} className="text-start">{props.aboutName}</motion.h2>
                                        <motion.h4 initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : ''}
                                            transition={inView ? { duration: .75, delay: aDelay * .75 } : ''} className="text-start">{props.aboutProfession}</motion.h4>
                                    </div>
                                </motion.div>
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                    animate={inView ? { y: 0, opacity: 1 } : ''}
                                    transition={inView ? { duration: .75, delay: aDelay * 1.75 } : ''} className='col-4 aboutCol photoCol'>
                                    <Image src={`https:${props.aboutPPhoto.fields.file.url}`} width={props.aboutPPhoto.fields.file.details.image.width} height={props.aboutPPhoto.fields.file.details.image.height} alt="profile picture" className="img-fluid img-thumbnail im-style" />
                                </motion.div>
                            </div>
                            <div className='row aboutRow '>
                                <motion.div initial={{ y: 100, opacity: 0 }}
                                    animate={inView ? { y: 0, opacity: 1 } : ''}
                                    transition={inView ? { duration: .75, delay: aDelay * 4 } : ''} className='col-4 aboutCol'>
                                    {props.aboutCharacterHeadlines.map((headline, index) => {
                                        delayMultiplier += 0.5;
                                        //console.log(index);
                                        return <motion.div key={index} initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : ''}
                                            transition={inView ? { duration: 1, delay: aDelay * delayMultiplier } : ''} className="text-break">
                                            <h3>{headline.fields.trait}</h3>
                                            <p>{headline.fields.explanation}</p>
                                        </motion.div>
                                    })}
                                </motion.div>
                                <motion.div  initial={{ y: 100, opacity: 0 }}
                                    animate={inView ? { y: 0, opacity: 1 } : ''}
                                    transition={inView ? { duration: .75, delay: aDelay * 2.5 } : ''} className='col-8 aboutCol personalityCol'>
                                    <motion.p initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 1, delay: aDelay * 3.5 } : ''} className="text-start">{props.aboutSummary}</motion.p>
                                </motion.div>
                            </div>
                        </div>
                        <div className='col-lg-4 rightRow'>
                            <motion.div ref={ref} initial={{ y: 100, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : ''}
                                transition={inView ? { duration: .75, delay: aDelay * 2.5 } : ''} className='col aboutCol h-75 d-inline-block'>
                                <motion.p initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : ''}
                                    transition={inView ? { duration: 1, delay: aDelay * 3 } : ''} className="text-start">{props.aboutPhilosophy}</motion.p>
                            </motion.div>
                            <motion.div initial={{ y: 100, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : ''}
                                transition={inView ? { duration: .75, delay: aDelay * 5.75 } : ''} className='col aboutCol linkListCol w-100 p-3 h-25'>
                                <div className="list-inline displayMiddle">
                                    <motion.li initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 2, delay: aDelay * 6 } : ''} className="list-inline-item"><a href={props.linkedinLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></motion.li>
                                    <motion.li initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 2, delay: aDelay * 6 } : ''} className="list-inline-item"><a href={props.githubLink} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></motion.li>
                                    <motion.li initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 2, delay: aDelay * 6 } : ''} className="list-inline-item"><a href="#contact"><FontAwesomeIcon icon={faEnvelope} /></a></motion.li>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </AnimatePresence>
        </section>
    )
}