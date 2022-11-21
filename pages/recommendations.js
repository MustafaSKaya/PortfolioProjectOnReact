import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import profilePhoto from '../images/1.jpg';
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

export default function recommendations() {
    return (
        <section class="recommendations padding4section bg-sec" id="recommendations">
            <div class="container text-center">
                <div class="row">
                    <div class="col way-fade-right">
                        <h2>Recommendations</h2>
                        <p>Kind words from friends</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <OwlCarousel className="owl-theme" items={1} autoplay={true} loop={true} >

                            <div class="item">
                                <div class="test-item text-center">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <div><Image src={profilePhoto} class="mx-auto rounded-circle test-img"></Image></div>
                                    <p class="text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat quidem hic dicta incidunt.</p>
                                    <p class="test-name">Jessi Walter, Ceo Murno.com</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="test-item text-center">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <div><Image src={profilePhoto} class="mx-auto rounded-circle test-img"></Image></div>
                                    <p class="text-muted font-italic mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat quidem hic dicta incidunt.</p>
                                    <p class="test-name">Caron Smith, Ceo Lopra.com</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="test-item text-center">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <div><Image src={profilePhoto} class="mx-auto rounded-circle test-img"></Image></div>
                                    <p class="text-muted font-italic">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat quidem hic dicta incidunt.</p>
                                    <p class="test-name">Alan Harper, Ceo thm.com</p>
                                </div>
                            </div>

                            <div class="item">
                                <div class="test-item text-center">
                                    <FontAwesomeIcon icon={faQuoteLeft} />
                                    <div><Image src={profilePhoto} class="mx-auto rounded-circle test-img"></Image></div>
                                    <p class="text-muted font-italic mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore fugiat quidem hic dicta incidunt.</p>
                                    <p class="test-name">Jessi Walter, Ceo Murno.com</p>
                                </div>
                            </div>

                    </OwlCarousel>


                </div>
            </div>
        </div>
        </section >
    )
}