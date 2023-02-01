import './styles.css'

export default function Body () {
    return (
        <section className='body-section'>
            <div className='aboutme-description'>
                <h2 className='aboutme-title'>SOBRE MÍ</h2>
                <div className='aboutme-text'>
                <span>Productora multimedia.<br></br>   Con conocimientos en marketing y desarrollo frontend usando tecnologías cómo HTML, CSS, Javascript y bases de React.
                <br></br>Con manejo de Adobe photoshop, illustrator, lightroom y figma. 
                <br></br> Experiencia en creación de paginas web, manejo de redes sociales y procesos administrativos, manejo de siigo, excel intermedio.</span>
                </div>
            </div>
            <div className='experience-description'>
                <div className='experience-text'>
                    <h2> EXPERIENCIA LABORAL</h2>
                    <span>Head Marketing / Administrador</span>
                    <span>Tuprop S.A.S.. | Mayo 2020 - Octubre 2022</span>
                    <ul className='experience-functions'>
                        <li className='experience-functions__items'>Gestión y diseño de redes sociales</li>
                        <li className='experience-functions__items'>Creación de campañas facebook ads</li>
                        <li className='experience-functions__items'>Creación de contenidos para redes y blog</li>
                        <li className='experience-functions__items'>Manejo de bases de datos</li>
                        <li className='experience-functions__items'>Procesos administrativos, manejo de personal</li>
                    </ul>

                </div>
            </div>
        </section>  
    )
}
