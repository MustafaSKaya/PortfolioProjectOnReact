import Image from 'next/image';
import { useEffect, useState } from 'react';
import ThumnailPhoto from '../public/thumbnail.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {

    const [aDelay, setADelay] = useState(1.5);

    const { ref, inView } = useInView();
    const [ref2, inView2] = useInView();
    const [ref3, inView3] = useInView();
    const [ref5, inView5] = useInView();
    const [ref6, inView6] = useInView();
    const [ref8, inView8] = useInView();
    const [ref9, inView9] = useInView();
    const [ref11, inView11] = useInView();
    const [ref12, inView12] = useInView();
    const [ref14, inView14] = useInView();
    const [ref15, inView15] = useInView();
    const [ref16, inView16] = useInView();
    const [ref17, inView17] = useInView();
    const [ref18, inView18] = useInView();
    const [ref19, inView19] = useInView();
    const [ref20, inView20] = useInView();

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
                                <motion.div ref={ref} initial={{ y: 100, opacity: 0 }}
                                    animate={inView ? { y: 0, opacity: 1 } : ''}
                                    transition={{ duration: .75 }}
                                    className='col-8 aboutCol nameCol h-auto'>
                                    <div className='displayBottom'>
                                        <motion.h2 ref={ref2} initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : ''}
                                            transition={inView ? { duration: .75, delay: aDelay * .5 } : ''} className="text-start">Mustafa Said Kaya</motion.h2>
                                        <motion.h4 ref={ref3} initial={{ opacity: 0 }}
                                            animate={inView ? { opacity: 1 } : ''}
                                            transition={inView ? { duration: .75, delay: aDelay * .75 } : ''} className="text-start">Junior Full-Stack Web Developer</motion.h4>
                                    </div>
                                </motion.div>
                                <motion.div ref={ref5} initial={{ y: 100, opacity: 0 }}
                                    animate={inView ? { y: 0, opacity: 1 } : ''}
                                    transition={inView ? { duration: .75, delay: aDelay * 1.75 } : ''} className='col-4 aboutCol photoCol'>
                                    <Image src={ThumnailPhoto} alt="profile picture" className="img-fluid img-thumbnail im-style" />
                                </motion.div>
                            </div>
                            <div className='row aboutRow '>
                                <motion.div ref={ref12} initial={{ y: 100, opacity: 0 }}
                                    animate={inView ? { y: 0, opacity: 1 } : ''}
                                    transition={inView ? { duration: .75, delay: aDelay * 4 } : ''} className='col-4 aboutCol'>
                                    <motion.div ref={ref14} initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 1, delay: aDelay * 4.5 } : ''} className="text-break">
                                        <h3>Persistent</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </motion.div>
                                    <motion.div ref={ref15} initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 1, delay: aDelay * 5 } : ''} className="text-break">
                                        <h3>Hard-working</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </motion.div>
                                    <motion.div ref={ref16} initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 1, delay: aDelay * 5.5 } : ''} className="text-break">
                                        <h3>Blablabla</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur</p>
                                    </motion.div>
                                </motion.div>
                                <motion.div ref={ref9} initial={{ y: 100, opacity: 0 }}
                                    animate={inView ? { y: 0, opacity: 1 } : ''}
                                    transition={inView ? { duration: .75, delay: aDelay * 2.5 } : ''} className='col-8 aboutCol personalityCol'>
                                    <motion.p ref={ref11} initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 1, delay: aDelay * 3.5 } : ''} className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quaerat voluptatem sequi ut. Eligendi id enim numquam magni, quibusdam at? Harum odit incidunt explicabo veritatis alias, ut consequatur repudiandae similique.Velit provident facilis eligendi harum, quidem nisi repellendus soluta hic dolorem asperiores quia eius Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quaerat voluptatem sequi ut. Eligendi id enim numquam magni, quibusdam at? Harum odit incidunt explicabo veritatis alias, ut consequatur repudiandae similique.Velit provident facilis eligendi harum, quidem nisi repellendus soluta hic dolorem asperiores quia eius Lorem ipsum dolor sit amet,</motion.p>
                                </motion.div>
                            </div>
                        </div>
                        <div className='col-lg-4 rightRow'>
                            <motion.div ref={ref6} initial={{ y: 100, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : ''}
                                transition={inView ? { duration: .75, delay: aDelay * 2.5 } : ''} className='col aboutCol h-75 d-inline-block'>
                                <motion.p ref={ref8} initial={{ opacity: 0 }}
                                    animate={inView ? { opacity: 1 } : ''}
                                    transition={inView ? { duration: 1, delay: aDelay * 3 } : ''} className="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quaerat voluptatem sequi ut. Eligendi id enim numquam magni, quibusdam at? Harum odit incidunt explicabo veritatis alias, ut consequatur repudiandae similique.</motion.p>
                            </motion.div>
                            <motion.div ref={ref17} initial={{ y: 100, opacity: 0 }}
                                animate={inView ? { y: 0, opacity: 1 } : ''}
                                transition={inView ? { duration: .75, delay: aDelay * 5.75 } : ''} className='col aboutCol linkListCol w-100 p-3 h-25'>
                                <div className="list-inline displayMiddle">
                                    <motion.li ref={ref18} initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 2, delay: aDelay * 6 } : ''} className="list-inline-item"><a href="https://www.linkedin.com/in/mustafasaidkaya/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></motion.li>
                                    <motion.li ref={ref19} initial={{ opacity: 0 }}
                                        animate={inView ? { opacity: 1 } : ''}
                                        transition={inView ? { duration: 2, delay: aDelay * 6 } : ''} className="list-inline-item"><a href="https://github.com/MustafaSKaya" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></motion.li>
                                    <motion.li ref={ref20} initial={{ opacity: 0 }}
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