import './Blinds.css'

export const Blinds = () => {

    const blinds = [
        {
            name: "Persianas Enrollables",
            feauters: {
                1: "Fácil manejo, mantenimiento y operación.",
                2: "Variedad de colecciones para distintos niveles de privacidad.",
                3: 'Versiones manuales y/o motorizadas compatibles con sistemas inteligentes.',
                4: 'Telas y componentes de la mayor calidad con certificaciones internacionales.'
            }
        },
        {
            name: "Persianas Sheer",
            feauters: {
                1: 'Control de luz y visibilidad hacia el exterior.',
                2: 'Fácil manejo, mantenimiento y operación.',
                3: 'Manejo manual o con motorización.',
                4: 'Diseños contemporáneos en una gama de colores y texturas de tendencia.'
            }
        }
    ]

    return (
        <>
            <div className='blinds d-flex justify-content-center'>
                <h3>Conoce la variedad de persianas que te ofrecemos:</h3>
            </div>
        </>
    )
}