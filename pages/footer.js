import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function footer() {
    return (
        <footer>
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col">
                        <div className="r-icon text-center mt-3">
                            <ul className="footer-link-list">
                                <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faTwitter} /></a></li>
                                <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
                            </ul>
                        </div>
                        <p className="text-muted">&copy;Copyright Mustafa Said Kaya / 2022 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}