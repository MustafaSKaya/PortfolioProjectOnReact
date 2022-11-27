import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import profilePhoto from '../pages/api/images/1.jpg';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

let $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

export default function Recommendations() {
    return (
        <section className="recommendations padding4section bg-sec" id="recommendations">
            <div className="container text-center">
                <div className="row">
                    <div className="col way-fade-right">
                        <h2>Recommendations</h2>
                        <p>Kind words from friends</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <OwlCarousel className="owl-theme" items={1} autoplay={true} loop={true} >

                            <div className="item">
                                <div className="test-item text-center">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <div><Image src={profilePhoto} className="mx-auto rounded-circle test-img" alt="#"></Image></div>
                                    <p className="text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat quidem hic dicta incidunt.</p>
                                    <p className="test-name">Jessi Walter, Ceo Murno.com</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="test-item text-center">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <div><Image src={profilePhoto} className="mx-auto rounded-circle test-img" alt="#"></Image></div>
                                    <p className="text-muted font-italic mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat quidem hic dicta incidunt.</p>
                                    <p className="test-name">Caron Smith, Ceo Lopra.com</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="test-item text-center">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <div><Image src={profilePhoto} className="mx-auto rounded-circle test-img" alt="#"></Image></div>
                                    <p className="text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat quidem hic dicta incidunt.</p>
                                    <p className="test-name">Alan Harper, Ceo thm.com</p>
                                </div>
                            </div>

                            <div className="item">
                                <div className="test-item text-center">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <div><Image src={profilePhoto} className="mx-auto rounded-circle test-img" alt="#"></Image></div>
                                    <p className="text-muted font-italic mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat quidem hic dicta incidunt.</p>
                                    <p className="test-name">Jessi Walter, Ceo Murno.com</p>
                                </div>
                            </div>

                    </OwlCarousel>


                </div>
            </div>
        </div>
        </section >
    )
}