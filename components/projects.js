import Image from 'next/image';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Project1Photo from '../public/image.jpg';
import Project2Photo from '../public/2.jpg';
import Project3Photo from '../public/3.jpg';
import Project4Photo from '../public/1.gif';
import Project6Photo from '../public/6.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { redirect } from 'next/dist/server/api-utils';

const temporaryProjectsArrayofObjects = [
    {
        id: 0,
        name: "Project1",
        imageURL: Project4Photo,
        popUpImg: Project1Photo,
        madeWith: ["Javascript", "React"]
    },
    {
        id: 1,
        name: "Project2",
        imageURL: Project4Photo,
        popUpImg: Project1Photo,
        madeWith: ["Javascript", "jQuery"]
    },
    {
        id: 2,
        name: "Project3",
        imageURL: Project4Photo,
        popUpImg: Project1Photo,
        madeWith: ["Javascript", "React"]
    },
    {
        id: 3,
        name: "Project4",
        imageURL: Project4Photo,
        popUpImg: Project1Photo,
        madeWith: ["Javascript", "React"]
    },
    {
        id: 4,
        name: "Project6",
        imageURL: Project4Photo,
        popUpImg: Project1Photo,
        madeWith: ["Javascript", "jQuery"]
    },
    {
        id: 5,
        name: "Project7",
        imageURL: Project4Photo,
        popUpImg: Project1Photo,
        madeWith: ["Javascript", "jQuery"]
    },
    {
        id: 6,
        name: "Project8",
        imageURL: Project4Photo,
        popUpImg: Project1Photo,
        madeWith: ["Javascript", "React"]
    }

]

export default function Projects() {

    const [filtered, setFiltered] = useState(temporaryProjectsArrayofObjects);
    const [selectedProject, setSelectedProject] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");

    const togglePopUp = () => {
        setSelectedProject(false);
    };

    const madeWithString = (array) => {
        let str = '';
        for (let i = 0; i < array.length; i++) {
            str += "#" + array[i] + " ";
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
            setFiltered(temporaryProjectsArrayofObjects);
            return
        };

        setFiltered(temporaryProjectsArrayofObjects.filter((project) => project.madeWith.includes(activeFilter)));

        //console.log(filtered);

    }, [activeFilter, selectedProject])

    return (
        <section className="projects r-p">
            <div className="container text-center">
                <div className="row">
                    <div className="col mb-5">
                        <h2>Projects</h2>
                        <p>I have worked on</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mx-auto mb-3">
                        <button onClick={() => setActiveFilter("All")} className="btn btn-outline-info my-1">All</button>
                        <button onClick={() => setActiveFilter("jQuery")}
                        className="btn btn-outline-info my-1">jQuery/Javascript</button>
                        <button onClick={() => setActiveFilter("React")}
                        className="btn btn-outline-info my-1">React/Javascript</button>
                    </div>
                </div>
                <motion.div layout className="container">
                    <div className="row d-flex justify-content-evenly">
                        <AnimatePresence>
                            {filtered.map((project) => {
                                return <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={project.id} className="col-lg-4 col-md-6 col-sm-12 col-xs-12 card-wrapper">
                                    <Image src={project.imageURL} href="" className="img-fluid" alt=""></Image>
                                    <div className="overlay">
                                        <h3 className='projectTitle'>{project.name}</h3>
                                        <button onClick={() => { setSelectedProject(temporaryProjectsArrayofObjects[project.id]) }}
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
                        <div className="col-lg-6 col-md-7 col-sm-8 col-11 popUpContent">
                            <div className='picContainer'>
                                <Image src={selectedProject.popUpImg} href="" className="popUpImg" alt=""></Image>
                            </div>
                            <div className='descriptionCont'>
                                <h2 className='projectTitle'>{selectedProject.name}</h2>
                                <p className='projectTechs'>{madeWithString(selectedProject.madeWith)}</p>
                                <div className='project-border'></div>
                                <p className='projectDesc'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                                    perferendis suscipit officia recusandae, eveniet quaerat assumenda
                                    id fugit, dignissimos maxime non natus placeat illo iusto!
                                    Sapiente dolorum id maiores dolores? Illum pariatur possimus
                                    quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                                    placeat tempora vitae enim incidunt porro fuga ea.
                                </p>
                                <button className="btn btn-dark closeButton" onClick={togglePopUp}>X</button>
                                <button className='btn btn-dark linkButton'><FontAwesomeIcon icon={faGithub} />GitHub Link</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}