import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';

export default function Services({ servicesHeadline, servicesHeadlineDesc, backEndDevDesc, frontEndDevDesc, unitTestingDesc }) {

    return (
        <section className="services bg-sec padding4section" id="services">
            <div className="container text-center">
                <div className="row">
                    <div className="col way-fade-right ">
                        <div className="col">
                            <h2>{servicesHeadline}</h2>
                            <p>{servicesHeadlineDesc}</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center way-fade-up">
                    <div className="col-lg-4 mb-3">
                        <div className="card cardPosition">
                            <div className="card-header">
                                <FontAwesomeIcon className='icon' icon={faGear}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Back-End Development</h5>
                                <div className="service-border" ></div>
                                <p className="card-text servicesDesc">{backEndDevDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="card cardPosition">
                            <div className="card-header">
                                <FontAwesomeIcon className='icon' icon={faWindowRestore} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Front-End Development</h5>
                                <div className="service-border"></div>
                                <p className="card-text servicesDesc">{frontEndDevDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3">
                        <div className="card cardPosition">
                            <div className="card-header">
                                <FontAwesomeIcon className='icon' icon={faGlasses} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Unit Testing</h5>
                                <div className="service-border"></div>
                                <p className="card-text servicesDesc">{unitTestingDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}