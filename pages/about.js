import Image from 'next/image';
import ThumnailPhoto from '../pages/api/images/thumbnail.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function About() {
    return (
        <section className="about padding4section" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Image src={ThumnailPhoto} alt="profile picture" className="img-fluid img-thumbnail im-style"/>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-0">
                        <h2>About</h2>
                        <h4>Hi <span></span>I&apos;m Adam Adamson</h4>
                        <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates quaerat voluptatem sequi ut. Eligendi id enim numquam magni, quibusdam at? Harum odit incidunt explicabo veritatis alias, ut consequatur repudiandae similique.</span><span>Velit provident facilis eligendi harum, quidem nisi repellendus soluta hic dolorem asperiores quia eius, accusamus ipsam atque numquam quaerat omnis aut non maiores dolorum quibusdam obcaecati itaque. Tenetur, culpa fugiat.</span></p>
                        <div className="list-inline">
                            <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faFacebookF}/></a></li>
                            <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faTwitter}/></a></li>
                            <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faLinkedin}/></a></li>
                            <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faGithub}/></a></li>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}