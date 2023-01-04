import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Skills({ skillsHeadline, skills }) {

    //console.log("skills section", skills, skillsHeadline)

    const { ref, inView } = useInView();

    return (
        <section className="skills mb-5" id="skills">
            <AnimatePresence>
                <motion.div layout ref={ref} className="container">
                    <div className="row">
                        <motion.div initial={{ x: -200, opacity: 0 }}
                            animate={inView ? { x: 0, opacity: 1 } : ''}
                            transition={{ duration: .75 }} className="col-lg-6 d-flex justify-content-center align-items-center skillsHeadline">
                            <h3>{skillsHeadline}</h3>
                        </motion.div>
                        <div className="col-lg-6 techs mb-4">
                            <div className="row">
                                {skills.map((skill, index) => <motion.div key={skill.fields.label} initial={{ x: 45, opacity: 0 }} animate={inView ? { x: 0, opacity: 1 } : ''} transition={{ delay: index * .1 }} className='col-lg-4 col-md-4 col-sm-4 col-6 d-flex justify-content-start mt-3'>
                                    <Image src={`https:${skill.fields.image.fields.file.url}`} height={skill.fields.image.fields.file.details.image.height} width={skill.fields.image.fields.file.details.image.width} alt={skill.fields.alt} className="svg-inline--fa logo" />
                                    <label className='px-3 text-break'>{skill.fields.label}</label>
                                </motion.div>)}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </section >
    )
}