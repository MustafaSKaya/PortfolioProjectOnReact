import Image from 'next/image';
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import Project1Photo from '../public/1.jpg';
import Project2Photo from '../public/2.jpg';
import Project3Photo from '../public/3.jpg';
import Project4Photo from '../public/4.jpg';
import Project6Photo from '../public/6.jpg';
import { redirect } from 'next/dist/server/api-utils';

const temporaryProjectsArrayofObjects = [
    {
        id: 0,
        name: "Project1",
        imageURL: Project1Photo,
        madeWith: ["Javascript", "React"]
    },
    {
        id: 1,
        name: "Project2",
        imageURL: Project2Photo,
        madeWith: ["Javascript", "jQuery"]
    },
    {
        id: 2,
        name: "Project3",
        imageURL: Project3Photo,
        madeWith: ["Javascript", "React"]
    },
    {
        id: 3,
        name: "Project4",
        imageURL: Project4Photo,
        madeWith: ["Javascript", "React"]
    },
    {
        id: 4,
        name: "Project6",
        imageURL: Project6Photo,
        madeWith: ["Javascript", "jQuery"]
    },
    {
        id: 5,
        name: "Project7",
        imageURL: Project1Photo,
        madeWith: ["Javascript", "jQuery"]
    },
    {
        id: 6,
        name: "Project8",
        imageURL: Project2Photo,
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

    //console.log("var mi?: ", selectedProject);

    useEffect(() => {
        if (selectedProject) {
            document.body.classList.add('active-popUp')
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
                    <div className="col-12 mx-auto mb-5">
                        <button onClick={() => setActiveFilter("All")} className="btn btn-outline-info">All</button>
                        <button onClick={() => setActiveFilter("jQuery")}
                            className="btn btn-outline-info">jQuery/Javascript</button>
                        <button onClick={() => setActiveFilter("React")}
                            className="btn btn-outline-info">React/Javascript</button>
                    </div>
                </div>
                <motion.div layout className="container">
                    <div className="row d-flex justify-content-evenly">
                        <AnimatePresence>
                            {filtered.map((project) => {
                                return <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} key={project.id} className="col-xs-6 col-sm-6 col-md-4 card-wrapper">
                                    <Image src={project.imageURL} href="" className="img-fluid" alt=""></Image>
                                    <div className="overlay">
                                        <h3>{project.name}</h3>
                                        <p>{project.madeWith}</p>
                                        <button onClick={() => { setSelectedProject(temporaryProjectsArrayofObjects[project.id]) }}
                                            className='btn btn-info'>Details</button>

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
                    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className="popUp">
                        <div onClick={togglePopUp} className="popUpOverlay"></div>
                        <div className="popUpContent">
                            <h2>{selectedProject.name}</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
                                perferendis suscipit officia recusandae, eveniet quaerat assumenda
                                id fugit, dignissimos maxime non natus placeat illo iusto!
                                Sapiente dolorum id maiores dolores? Illum pariatur possimus
                                quaerat ipsum quos molestiae rem aspernatur dicta tenetur. Sunt
                                placeat tempora vitae enim incidunt porro fuga ea.
                            </p>
                            <button className="closeButton" onClick={togglePopUp}>
                                CLOSE
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>

    )
}