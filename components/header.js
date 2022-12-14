import Typed from "typed.js";
import { useEffect, useRef } from "react";

export default function Header() {

    const element1 = useRef(null);
    const element2 = useRef(null);

    useEffect(() => {
        const typed1 = new Typed(element1.current, {
            strings: ["Googling throughout the day; still missing semicolons to my dismay."],
            startDelay: 500,
            typeSpeed: 90,
            backSpeed: 100,
            backDelay: 100,
            showCursor: false,
        });

        const typed2 = new Typed(element2.current, {
            strings: ["Bulding applications with vision, creativity and proper amount of tears that not only looks and feels good but works good."],
            startDelay: 9000,
            typeSpeed: 65,
            backSpeed: 100,
            backDelay: 100,
            showCursor: false,
        });

        return () => {
            typed1.destroy();
            typed2.destroy();
        };
    }, []);

    return (
        <header id="home">
            <div className="container-fluid text-center header-content">
                <div className="row headerRow">
                    <div className="col">
                        <div className="content-box">
                            <h1><span ref={element1} className="element1"></span></h1>
                            <p><span ref={element2} className="element2"></span></p>        
                        </div>
                    </div>
                </div>
                <a href="#" className="btn">Let&apos;s connect</a>
            </div>
        </header>
    )
}