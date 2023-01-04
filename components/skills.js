import Image from 'next/image';

export default function Skills({ skillsHeadline, skills }) {

    //console.log("skills section", skills, skillsHeadline)

    return (
        <section className="skills mb-5" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex justify-content-center align-items-center skillsHeadline">
                        <h3>{skillsHeadline}</h3>
                    </div>
                    <div className="col-lg-6 techs mb-4">
                        <div className="row">
                            {skills.map(skill => <div key={skill.fields.label} className='col-lg-4 col-md-4 col-sm-4 col-6 d-flex justify-content-start mt-3'>
                                <Image src={`https:${skill.fields.image.fields.file.url}`} height={skill.fields.image.fields.file.details.image.height} width={skill.fields.image.fields.file.details.image.width} alt={skill.fields.alt} className="svg-inline--fa logo" />
                                <label className='px-3 text-break'>{skill.fields.label}</label>
                            </div>)}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}