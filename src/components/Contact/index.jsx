import './styles.css'


export default function Contact() {
    return (
        <section className='contact-section'>
            <div className='information-contact'>
                <div>
                    <h2 className='information-title'>CONTACTO</h2>
                </div>
            </div>
            <div className='academic-data'>
                <div className='academic-description'>
                    <h2> DATOS ACADÉMICOS</h2>
                    <span className='academic-institution'>SENA - Centro de Diseño e Innovación Tecnólogica Industrial</span> <br />
                    <span>Tecnología en Producción Multimedia</span><br />
                    <link href='https://www.linkedin.com/in/dianagonzalez26/' />
                    <span>Agosto 2020 - Septiembre 2022</span><br />

                    <br />
                    <span className='academic-institution'>SENA - Centro de Servicios Financieros </span> <br />
                    <span>Técnico en Contabilización de Operaciones Comerciales y Financieras</span> <br />
                    <link href='https://www.linkedin.com/in/dianagonzalez26/'/>
                    <span>Diciembre 2015 - Enero 2017</span>
                </div>
            </div>
        </section>
    )
}