import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faGlasses } from '@fortawesome/free-solid-svg-icons';

export default function services() {
    return (
        <section class="services bg-sec padding4section" id="services">
            <div class="container text-center">
                <div class="row">
                    <div class="col mb-5 way-fade-right ">
                        <div class="col">
                            <h2>My Services</h2>
                            <p>What I can offer to the table</p>
                        </div>
                    </div>
                </div>
                <div class="row text-center way-fade-up">
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <FontAwesomeIcon className='icon' icon={faGear}/>
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Back-End Development</h5>
                                <div class="service-border" ></div>
                                <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <FontAwesomeIcon className='icon' icon={faWindowRestore} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Front-End Development</h5>
                                <div class="service-border"></div>
                                <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="card">
                            <div class="card-header">
                                <FontAwesomeIcon className='icon' icon={faGlasses} />
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Testing</h5>
                                <div class="service-border"></div>
                                <p class="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}