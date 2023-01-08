import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import profilePhoto from '../public/1.jpg';
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

export default function Recommendations({ recomHeadline, recomHeadlineDesc, recommendations }) {

    //console.log("reco", recommendations)

    const [amountOfReco, setAmountOfReco] = useState(1);
    const [windowWidth, setWindowWidth] = useState(765);

    useEffect(() => {
        if ((typeof window !== "undefined")) {
            setWindowWidth(window.innerWidth);
        }
        
        let cb = function () {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", cb);

        if (windowWidth <= 768) {
            setAmountOfReco(1);
            return
        } else if (windowWidth >= 769 && windowWidth <= 1200) {
            setAmountOfReco(2);
            return
        } else {
            setAmountOfReco(2);
            return
        };

    }, [windowWidth]);

    return (
        <section className="recommendations padding4section bg-sec" id="recommendations">
            <div className="container text-center">
                <div className="row">
                    <div className="col way-fade-right">
                        <h2>{recomHeadline}</h2>
                        <p>{recomHeadlineDesc}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <OwlCarousel className="owl-theme" items={amountOfReco} autoplay={true} loop={true}>
                            {recommendations.map((elem, index) => {
                                return <div key={index} className="item">
                                    <div className="test-item text-center">
                                        <FontAwesomeIcon icon={faQuoteLeft} />
                                        <div><Image src={`https:${elem.fields.profilePhoto.fields.file.url}`} height={elem.fields.profilePhoto.fields.file.details.image.height} width={elem.fields.profilePhoto.fields.file.details.image.width} alt={elem.fields.referencer} className="mx-auto rounded-circle test-img"></Image></div>
                                        <p className="text-muted font-italic mt-3 px-4">{elem.fields.fewKindWords}</p>
                                        <p className="test-name">{elem.fields.referencer}</p>
                                    </div>
                                </div>
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section >
    )
}