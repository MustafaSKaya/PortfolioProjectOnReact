import Image from 'next/image';
import ThumnailPhoto from '../images/thumbnail.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <section className="about padding4section" id="about">
            <div className="container">
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='row aboutRow '>
                            <div className='col-8 aboutCol nameCol h-auto'>
                                <div className='displayBottom'>
                                <h2 class="text-start">Mustafa Said Kaya</h2>
                                <h4 class="text-start">Junior Full-Stack Web Developer</h4>
                                </div>
                            </div>
                            <div className='col-4 aboutCol photoCol'>
                                <Image src={ThumnailPhoto} alt="profile picture" className="img-fluid img-thumbnail im-style" />
                            </div>
                        </div>
                        <div className='row aboutRow '>
                            <div className='col-4 aboutCol'>
                                <div>
                                    <h2>Persistent</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                                <div>
                                    <h2>Hard-working</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                                <div>
                                    <h2>Blablabla</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                                </div>
                            </div>
                            <div className='col-8 aboutCol personalityCol'>
                                <p class="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quaerat voluptatem sequi ut. Eligendi id enim numquam magni, quibusdam at? Harum odit incidunt explicabo veritatis alias, ut consequatur repudiandae similique.Velit provident facilis eligendi harum, quidem nisi repellendus soluta hic dolorem asperiores quia eius</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 rightRow'>
                        <div className='col aboutCol h-75 d-inline-block'>
                            <p class="text-start">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quaerat voluptatem sequi ut. Eligendi id enim numquam magni, quibusdam at? Harum odit incidunt explicabo veritatis alias, ut consequatur repudiandae similique.</p>
                        </div>
                        <div className='col aboutCol linkListCol w-100 p-3 h-25 d-inline-block'>
                            <div className="list-inline">
                                <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}