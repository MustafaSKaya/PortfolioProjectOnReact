import { Waypoint } from 'react-waypoint';
import { useEffect, useState } from "react";
import { faHtml5, faCss3Alt, faJs, faSass, faReact, faGithub, faPhp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Skills() {

    /*let [progressBars, setProgressBars] = useState(false);
    let [htmlProgress, setHTMLProgress] = useState('90%');
    let [cssProgress, setCSSProgress] = useState('80%')
    let [jQueryProgress, setJQueryProgress] = useState('75%')
    let [reactProgress, setReactProgress] = useState('70%')

    useEffect(() => {
        setProgressBars(document.querySelectorAll('.progress-bar'));
    }, []);

    console.log(typeof progressBars);

    const handleView = () => {

        progressBars[0].style.width = htmlProgress;
        progressBars[1].style.width = cssProgress;
        progressBars[2].style.width = jQueryProgress;
        progressBars[3].style.width = reactProgress;

        Object.values(progressBars).forEach(element => element.style.transition = "3s all");
    };

    const handleOutOfView = () => {

        Object.values(progressBars).forEach(element => element.style.width = "0%");

    };*/

    return (
        <section className="skills mb-5" id="skills">
            <Waypoint
                //onEnter={handleView}
                //onLeave={handleOutOfView}
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <h3>Languages, libraries, frameworks and various tools I worked with...</h3>
                    </div>
                    <div className="col-md-6 techs mb-4">
                        <label><FontAwesomeIcon icon={faHtml5} />HTML5</label>
                        
                        <label><FontAwesomeIcon icon={faCss3Alt} />CSS3</label>
                        
                        <label><FontAwesomeIcon icon={faJs} />Javascript</label>

                        <label><FontAwesomeIcon icon={faReact} />React</label>

                        <label><div className="jQuery logo"></div>jQuery</label>

                        <label><div className="nextjs logo"></div>Next.js</label>

                        <label><FontAwesomeIcon icon={faSass} />SASS</label>

                        <label><FontAwesomeIcon icon={faGithub} />GitHb</label>
                        
                        <label><div className="postgresql logo"></div>PostgreSQL</label>

                        <label><div className="jest logo"></div>JEST</label>
                        
                        <label><div className="cypress logo"></div>Cypress</label>
                    
                        <label><div className="ruby logo"></div>Ruby</label>

                        <label><div className="rails logo"></div>Rails</label>

                        <label><FontAwesomeIcon icon={faPhp} />PHP</label>
                    </div>
                </div>
            </div>
        </section>
    )
}