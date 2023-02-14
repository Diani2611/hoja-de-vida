import './styles.css'

export default function Body () {
    return (
        <section className='body-section'>
            <div className='aboutme-description'>
                <h2 className='aboutme-title'>SOBRE MÍ</h2>
                <div className='aboutme-text'>
                <span>Tecnóloga en Producción multimedia.<br></br>   Con experiencia en creación de paginas web, manejo de redes sociales, conocimientos en marketing y desarrollo frontend usando tecnologias cómo HTML, CSS, Java Script, bases de React y C#.
                <br></br>Elaboración de piezas gráficas para redes sociales, manejo de Adobe photoshop, illustrator, lightroom y figma. Edición de audio y video, modelado 3D.
                <br></br>Con capacidad de análisis, aprendizaje constante, mejoramiento continuo, iniciativa e innovación. </span>
                <hr className='aboutme-line'></hr>
                </div>
            </div>
            <div className='experience-description'>
                <div className='experience-text'>
                    <h2> EXPERIENCIA LABORAL</h2>
                    <span className='experiencie-position'>Head Marketing / Administrador</span> <br/>
                    <span>Tuprop S.A.S.. | Mayo 2020 - Octubre 2022</span>
                    <ul className='experience-functions'>
                        <li className='experience-functions__items'>Gestión y diseño de redes sociales</li>
                        <li className='experience-functions__items'>Creación de campañas facebook ads</li>
                        <li className='experience-functions__items'>Creación de contenidos para redes y blog</li>
                        <li className='experience-functions__items'>Manejo de bases de datos</li>
                        <li className='experience-functions__items'>Procesos administrativos, manejo de personal</li>
                    </ul>
                    <span className='experiencie-position'>Desarrollador frontend freelance </span> <br/>
                    <span> Grupo ARF S.A.S.| Diciembre 2021 - Junio 2022</span>
                    <ul className='experience-functions'>
                        <li className='experience-functions__items'>Desarrollo web</li>
                        <li className='experience-functions__items'>Creación e integración de animaciones</li>
                    </ul>
                    <hr className='profile-line'></hr>
                </div>
            </div>
        </section>  
    )
}
