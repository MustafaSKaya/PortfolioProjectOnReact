import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
    return (
        <section className="contact padding4section bg-sec" id="contact">
            <div className="container text-center">
                <div className="row">
                    <div className="col way-fade-left">
                        <h2>Contact Us</h2>
                        <p>Feel free to contact me.</p>
                    </div>
                </div>
                <div className="row mt-5 way-fade-left ">
                    <div className="col-md-4">
                        <div className="r-icon"><FontAwesomeIcon icon={faMobileAlt} /></div>
                        <div className="text-center">
                            <h5>Call Us</h5>
                            <p>647-236-3370</p>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="r-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div className="text-center">
                            <h5>Email</h5>
                            <p className="text-muted">mustafakya88@hotmail.com</p>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="r-icon"><FontAwesomeIcon icon={faMapPin} /></div>
                        <div className="text-center">
                            <h5>Visit Us</h5>
                            <p className="text-muted">147 Rutherford Crt</p>

                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <form>
                            <div className="form-row way-fade-left">
                                <div className="form-group col-md-6">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="form-group col-md-6">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                            </div>
                            <div className="form-group way-fade-left">
                                <input type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group way-fade-left">
                                <textarea className="form-control message-area" rows="7" placeholder="Your Message" ></textarea>
                            </div>

                            <button type="submit" className="btn btn-danger way-fade-left">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}