import { Waypoint } from 'react-waypoint';
import { useEffect, useState } from "react";
import { faHtml5, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function skills() {

    let [progressBars, setProgressBars] = useState(false);
    let [htmlProgress, setHTMLProgress] = useState('90%');
    let [cssProgress, setCSSProgress] = useState('80%')
    let [jQueryProgress, setJQueryProgress] = useState('75%')
    let [reactProgress, setReactProgress] = useState('70%')

    useEffect(() => {
        setProgressBars(document.querySelectorAll('.progress-bar'));
    }, []);

    //console.log(typeof progressBars);

    const handleView = () => {

        progressBars[0].style.width = htmlProgress;
        progressBars[1].style.width = cssProgress;
        progressBars[2].style.width = jQueryProgress;
        progressBars[3].style.width = reactProgress;

        Object.values(progressBars).forEach(element => element.style.transition = "3s all");
    };

    const handleOutOfView = () => {

        Object.values(progressBars).forEach(element => element.style.width = "0%");

    };

    return (
        <section className="skills mb-5" id="skills">
            <Waypoint
                onEnter={handleView}
                onLeave={handleOutOfView}
            />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <h3>My Skills</h3>
                    </div>
                    <div className="col-md-6 mb-4">
                        <label><FontAwesomeIcon icon={faHtml5} />HTML</label>
                        <div className="progress">
                            <div className="progress-bar html-bar" role="progressbar" aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >{htmlProgress}</div>
                        </div>
                        <label><FontAwesomeIcon icon={faCss3Alt} />CSS</label>
                        <div className="progress">
                            <div className="progress-bar css-bar" role="progressbar" aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100">{cssProgress}</div>
                        </div>
                        <label><div className="jQuery"></div>jQuery</label>
                        <div className="progress">
                            <div className="progress-bar jQuery-bar" role="progressbar" aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100">{jQueryProgress}</div>
                        </div>
                        <label><FontAwesomeIcon icon={faJs} />Javascript</label>
                        <div className="progress">
                            <div className="progress-bar js-bar" role="progressbar" aria-valuenow="0"
                                aria-valuemin="0"
                                aria-valuemax="100">{reactProgress}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}