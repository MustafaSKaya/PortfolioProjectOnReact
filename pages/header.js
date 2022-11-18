import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function header() {

    const element = useRef(null);

    useEffect(() => {
        const typed = new Typed(element.current, {
            strings: ["Adam Adamson", "a Full-Stack Web Developer", "a Software Engineer", "your best employee candidate"], // Strings to display
            // Speed settings, try diffrent values untill you get good results
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 100,
            loop: true,
            loopCount: Infinity
        });

        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <header id="home">
            <div className="container-fluid header-content">
                <div className="row">
                    <div className="col text-center">
                        <div className="content-box">
                            <h4>Hi</h4>
                            <h1><span>I'm </span><span ref={element} className="element"></span></h1>
                            <p><span></span></p>
                            <a href="#" className="btn">Download Resume</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}