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
            <div className='blinds d-flex align-items-center flex-column p-3'>
                <h3>Conoce la variedad de persianas que te ofrecemos:</h3>
                {
                    blinds.map((blind, index) => {
                        return (

                            <div className={`blinds__box d-flex w-75 p-4 mt-4 align-items-center justify-content-around row`}>
                                {
                                    index % 2 === 0 ?

                                        <>
                                            <div key={index} className={`blinds__box__blind${index}  col`}>

                                                <div className='text-center mb-4 fs-4'>{blind.name}</div>
                                                {
                                                    blind.feauters.map((feauter, index2) => {
                                                        return (

                                                            <ul key={index2} className={`blinds__box__blind${index}__feauter${index2} m-2`}>
                                                                <li>{feauter}</li>
                                                            </ul>

                                                        )
                                                    })
                                                }
                                            </div>
                                            <img height={300} width={350} src={`./assets/${blind.img}`} alt={blind.name} className='col-lg mt-sm-3' />
                                        </>


                                        :
                                        <>
                                            <div key={index} className={`blinds__box__blind${index} col order-lg-2`}>

                                                <div className='text-center mb-4 fs-4'>{blind.name}</div>
                                                {
                                                    blind.feauters.map((feauter, index2) => {
                                                        return (

                                                            <ul key={index2} className={`blinds__box__blind${index}__feauter${index2} m-2`}>
                                                                <li>{feauter}</li>
                                                            </ul>

                                                        )
                                                    })
                                                }
                                            </div>
                                            <img height={300} width={350} src={`./assets/${blind.img}`} alt={blind.name} className='col-lg order-lg-1 mt-sm-3' />
                                        </>

                                }

                            </div>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Blinds