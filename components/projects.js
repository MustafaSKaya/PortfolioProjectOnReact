import Image from 'next/image';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects({ projectHeadline, projectHeadlineDesc, projectButtons, projects }) {

    //console.log(projects)

    const [filtered, setFiltered] = useState(projects);
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedProject, setSelectedProject] = useState(false);
    
    //console.log("selectedProject", selectedProject)

    const togglePopUp = () => {
        setSelectedProject(false);
    };

    const addingHashtags = (string) => {
        let str = '#';
        for (let i = 0; i < string.length; i++) {
            if (string[i] === " ") {
                str += " #";
            } else {
                str += string[i];
            }
        }
        return str;
    }

    //console.log("var mi?: ", selectedProject);

    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add('active-popUp');
            console.log(document);
        } else {
            document.body.classList.remove('active-popUp')
        }

        if (activeFilter === "All") {
            setFiltered(projects);
            return
        };

        setFiltered(projects.filter((project) => project.fields.madeWith.split(" ").includes(activeFilter)));

        //console.log(filtered);

    }, [activeFilter, selectedProject])

    return (
        <section className="projects r-p">
            <div className="container text-center">
                <div className="row">
                    <div className="col mb-2">
                        <h2>{projectHeadline}</h2>
                        <p>{projectHeadlineDesc}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mx-auto mb-3">
                        {projectButtons.map((button) => 
                        <button onClick={() => setActiveFilter(button.fields.buttonKey)} key={button.fields.buttonKey} className={activeFilter === button.fields.buttonKey ? `btn btn-info my-1` : `btn btn-outline-info my-1`}>{button.fields.buttonName}
                        </button>)}
                    </div>
                </div>
                <motion.div layout className="container">
                    <div className="row d-flex justify-content-evenly">
                        <AnimatePresence>
                            {filtered.map((project, index) => {
                                return <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={index} className="col-lg-4 col-md-6 col-sm-12 col-xs-12 card-wrapper">
                                    <Image src={`https:${project.fields.thumbnailImage.fields.file.url}`} width={project.fields.thumbnailImage.fields.file.details.image.width} height={project.fields.thumbnailImage.fields.file.details.image.height} href="" className="img-fluid" alt=""></Image>
                                    <div className="overlay">
                                        <h3 className='projectTitle'>{project.fields.name}</h3>
                                        <button onClick={() => { setSelectedProject(projects[index]) }}
                                            className='btn btn-info my-1'>More Details</button>
                                    </div>
                                </motion.div>
                            }
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
            <AnimatePresence>
                {selectedProject && (
                    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="popUp">
                        <div onClick={togglePopUp} className="popUpOverlay"></div>
                        <div className="col-lg-6 col-md-9 col-sm-8 col-11 popUpContent">
                            <div className='picContainer'>
                                <Image src={`https:${selectedProject.fields.popUpImage.fields.file.url}`} width={selectedProject.fields.popUpImage.fields.file.details.image.width} height={selectedProject.fields.popUpImage.fields.file.details.image.height} href="" className="popUpImg" alt=""></Image>
                            </div>
                            <div className='descriptionCont'>
                                <h2 className='projectTitle'>{selectedProject.fields.name}</h2>
                                <p className='projectTechs'>{addingHashtags(selectedProject.fields.madeWith)}</p>
                                <div className='project-border'></div>
                                <p className='projectDesc'>{selectedProject.fields.projectDesc}</p>
                                <button className="btn btn-dark closeButton" onClick={togglePopUp}>X</button>
                                <a href={selectedProject.fields.projectLink} target="_blank" rel="noreferrer" className='btn btn-dark linkButton'><FontAwesomeIcon icon={faGithub} />GitHub Link</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}