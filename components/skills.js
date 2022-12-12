import { faHtml5, faCss3Alt, faJs, faSass, faReact, faGithub, faPhp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import jQueryImg from '../public/jquery.png';
import nextjsImg from '../public/nextjs.png';
import postgrImg from '../public/postgresql.png';
import jestImg from '../public/jest.png';
import cypressImg from '../public/cypress.png';
import rubyImg from '../public/ruby.png';
import railsImg from '../public/rails.png'

const skills = [
    { label: "HTML5", icon: faHtml5 },
    { label: "CSS3", icon: faCss3Alt },
    { label: "Javascript", icon: faJs },
    { label: "React", icon: faReact },
    { label: "jQuery", image: jQueryImg , alt:"jquery" },
    { label: "Nextjs", image: nextjsImg , alt:"nextjs" },
    { label: "SASS", icon: faSass },
    { label: "PostgreSQL", image: postgrImg , alt:"postgresql" },
    { label: "Github", icon: faGithub },
    { label: "JEST", image: jestImg , alt:"jest" },
    { label: "Cypress", image: cypressImg , alt:"cypress" },
    { label: "Ruby", image: rubyImg , alt:"ruby" },
    { label: "Rails", image: railsImg , alt:"rails" },
    { label: "PHP", icon: faPhp }
]

export default function Skills() {

    return (
        <section className="skills mb-5" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center">
                        <h3>Languages, libraries, frameworks and various tools I worked with...</h3>
                    </div>
                    <div className="col-lg-6 techs mb-4">
                        <div className="row">
                            {skills.map(skill => <div key={skill.label} className='col-lg-4 col-md-4 col-sm-4 col-6 d-flex justify-content-start mt-3'>
                                {skill.icon && <FontAwesomeIcon icon={skill.icon} />}
                                {skill.image&& <Image src={skill.image} alt={skill.alt} className="svg-inline--fa logo" />}
                                <label className='px-3 text-break'>{skill.label}</label>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}