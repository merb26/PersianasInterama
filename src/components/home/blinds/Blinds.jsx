import './scss/blinds.css'

const Blinds = () => {

    const blinds = [
        {
            name: "Persianas Enrollables",
            feauters: [

                "Fácil manejo, mantenimiento y operación.",
                "Variedad de colecciones para distintos niveles de privacidad.",
                'Versiones manuales y/o motorizadas compatibles con sistemas inteligentes.',
                'Telas y componentes de la mayor calidad con certificaciones internacionales.'
            ],
            img: 'enrollable.jpg'
        },
        {
            name: "Persianas Sheer",
            feauters: [
                'Control de luz y visibilidad hacia el exterior.',
                'Fácil manejo, mantenimiento y operación.',
                'Manejo manual o con motorización.',
                'Diseños contemporáneos en una gama de colores y texturas de tendencia.'
            ],
            img: 'sheer.jpg'
        }
    ]

    return (
        <>
            <div className='blinds d-flex align-items-center flex-column p-4'>
                <h3>Conoce la variedad de persianas que te ofrecemos:</h3>
                {
                    blinds.map((blind, index) => {
                        return (

                            <div className={`blinds__box d-flex w-75 p-4 mt-5 align-items-center justify-content-around`}>
                                <div key={index} className={`blinds__box__blind${index}`}>

                                    <div className='mb-4'>{blind.name}</div>
                                    {
                                        blind.feauters.map((feauter, index2) => {
                                            return (

                                                <ul key={index2} className={`blinds__box__blind${index}__feauter${index2} m-0`}>
                                                    <li>{feauter}</li>
                                                </ul>

                                            )
                                        })
                                    }
                                </div>
                                <img height={300} width={350} src={`./assets/${blind.img}`} alt={blind.name} />
                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Blinds