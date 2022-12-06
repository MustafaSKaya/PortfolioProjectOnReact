import { Waypoint } from 'react-waypoint';
import { useEffect, useState } from "react";
import { faHtml5, faCss3Alt, faJs, faSass, faReact, faGithub, faPhp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import jQueryImg from '../public/jquery.png';
import nextjsImg from '../public/nextjs.png';
import postgrImg from '../public/postgresql.png';
import jestImg from '../public/jest.png';
import cypressImg from '../public/cypress.png';
import rubyImg from '../public/ruby.png';
import railsImg from '../public/rails.png'

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
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <h3>Languages, libraries, frameworks and various tools I worked with...</h3>
                    </div>
                    <div className="col-lg-6 techs mb-4">
                        <div className="row">
                            <div className='col-4'>
                                <FontAwesomeIcon icon={faHtml5} /><label className='px-2'>HTML5</label>
                            </div>
                            <div className='col-4'>
                                <FontAwesomeIcon icon={faCss3Alt} /><label className='px-2'>CSS3</label>
                            </div>
                            <div className='col-4'>
                                <FontAwesomeIcon icon={faJs} /><label className='px-2'>Javascript</label>
                            </div>
                            <div className='col-4'>
                                <FontAwesomeIcon icon={faReact} /><label className='px-2'>React</label>
                            </div>
                            <div className='col-4'>
                                <Image src={jQueryImg} alt="jQuery" className="svg-inline--fa logo" /><label className='px-2'>jQuery</label>
                            </div>
                            <div className='col-4'>
                                <Image src={nextjsImg} alt="next.js" className="svg-inline--fa logo" /><label className='px-2'>Nextjs</label>
                            </div>
                            <div className='col-4'>
                                <FontAwesomeIcon icon={faSass} /><label className='px-2'>SASS</label>
                            </div>
                            <div className='col-4'>
                                <Image src={postgrImg} alt="postgreSQL" className="svg-inline--fa logo" /><label className='px-2'>PostgreSQL</label>
                            </div>
                            <div className='col-4'>
                                <FontAwesomeIcon icon={faGithub} /><label className='px-2'>GitHub</label>
                            </div>
                            <div className='col-4'>
                                <Image src={jestImg} alt="JEST" className="svg-inline--fa logo" /><label className='px-2'>JEST</label>
                            </div>
                            <div className='col-4'>
                                <Image src={cypressImg} alt="Cypress" className="svg-inline--fa logo" /><label className='px-2'>Cypress</label>
                            </div>
                            <div className='col-4'>
                                <Image src={rubyImg} alt="Ruby" className="svg-inline--fa logo" /><label className='px-2'>Ruby</label>
                            </div>
                            <div className='col-4'>
                                <Image src={railsImg} alt="Rails" className="svg-inline--fa logo" /><label className='px-2'>Rails</label>
                            </div>
                            <div className='col-4'>
                                <FontAwesomeIcon icon={faPhp} /><label className='px-2'>PHP</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}