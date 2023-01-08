import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons';

export default function Contact({ contactHeadline, contactHeadlineDesc, contactEmail, contactWhereabouts }) {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_rv32ea8', 'template_m0548ae', e.target, 'nEMrrss7jVRI24KNs')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };

    return (
        <section className="contact padding4section bg-sec" id="contact">
            <div className="container text-center">
                <div className="row">
                    <div className="col way-fade-left">
                        <h2>{contactHeadline}</h2>
                        <p>{contactHeadlineDesc}</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-around">

                    <div className="col-md-4">
                        <div className="r-icon"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <div className="text-center">
                            <h5>Email</h5>
                            <p className="text-muted">{contactEmail}</p>

                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="r-icon"><FontAwesomeIcon icon={faMapPin} /></div>
                        <div className="text-center">
                            <h5>Visit Me</h5>
                            <p className="text-muted">{contactWhereabouts}</p>

                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <form onSubmit={sendEmail}>
                            <div className="form-row way-fade-left">
                                <div className="form-group col-md-6 col-12">
                                    <input type="text" className="form-control" placeholder="Name" name='name' required />
                                </div>
                                <div className="form-group col-md-6 col-12">
                                    <input id="email" type="email" name="email" className="form-control" placeholder="Email" required />
                                </div>
                            </div>
                            <div className="form-group way-fade-left">
                                <input name="subject" type="text" className="form-control" placeholder="Subject" />
                            </div>
                            <div className="form-group way-fade-left">
                                <textarea id="message"
                                    name="message" className="form-control message-area" rows="7" placeholder="Your Message" ></textarea>
                            </div>
                            <button type="submit" className="btn btn-danger way-fade-left">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}