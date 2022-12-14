import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';

export default function Services() {
    return (
        <section className="services bg-sec padding4section" id="services">
            <div className="container text-center">
                <div className="row">
                    <div className="col mb-5 way-fade-right ">
                        <div className="col">
                            <h2>My Services</h2>
                            <p>What I can offer to the table</p>
                        </div>
                    </div>
                </div>
                <div className="row text-center way-fade-up">
                    <div className="col-lg-4">
                        <div className="card cardPosition">
                            <div className="card-header">
                                <FontAwesomeIcon className='icon' icon={faGear}/>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Back-End Development</h5>
                                <div className="service-border" ></div>
                                <p className="card-text servicesDesc">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cardPosition">
                            <div className="card-header">
                                <FontAwesomeIcon className='icon' icon={faWindowRestore} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Front-End Development</h5>
                                <div className="service-border"></div>
                                <p className="card-text servicesDesc">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card cardPosition">
                            <div className="card-header">
                                <FontAwesomeIcon className='icon' icon={faGlasses} />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Unit Testing</h5>
                                <div className="service-border"></div>
                                <p className="card-text servicesDesc">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.&quot;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}