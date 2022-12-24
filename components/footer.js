import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
        <footer>
            <div className="container h-100 d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col">
                        <div className="r-icon text-center mt-3">
                            <ul className="footer-link-list">
                                <li className="list-inline-item"><a href="https://www.linkedin.com/in/mustafasaidkaya/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                                <li className="list-inline-item"><a href="https://github.com/MustafaSKaya" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a></li>
                            </ul>
                        </div>
                        <p className="text-muted">&copy;Copyright Mustafa Said Kaya / 2022 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}