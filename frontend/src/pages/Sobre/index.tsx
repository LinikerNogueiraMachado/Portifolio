import './style.css'

function Sobre() {
    return (
        <body>
            <main className="flex-container">
                <div className="grid1">
                </div>
                <div className="grid1">
                    <h1> Oi, <br /> Sou <em>Liniker!</em></h1>
                    <h2>
                        &nbsp; Nascido em 1993, criado no interior Paulista.<br />
                        &nbsp; Aos 13 anos comecei a trabalhar de servente de Pedreiro, aos 18 de Pedreiro.
                        <br />
                        Desde pequeno, apaixonado pela tecnologia, adoro estudar, apesar de que abandonei a
                        escola quando pequeno, voltei a escola aos 22 anos de idade, completei o ensino médio e
                        sem perder tempo fiz um vestibular para ingressar à faculdade em CST - especificamente no
                        curso de Analise e Desenvolvimento de Sistemas. <br />
                        &nbsp; Sempre curioso quando criança e, confesso que até hoje sou, em saber como criavam
                        websites, games, sistemas entre outros com a tecnologia e, ao entrar para a faculdade que
                        minha mente se "abriu", foi onde aprendi como tudo é feito e o que da para ser feito com a
                        tecnologia e, coisas incríveis podem ser feitas, modeladas, remodeladas para sanar certas "dores",
                        aprendi como a tecnologia é extremamente útil para um ou mais "dores" seja para entretenimento ou
                        para saúde. <br />
                        &nbsp; Hoje sou um eterno aprendiz de Desenvolvimento e amo que faço.
                    </h2>
                </div >
                <div className='view'><a className='view-CV' href="/Curriculo/1">Visualizar cv</a></div>
            </main>
            <hr className="hr" />
            <h1 className="title-skill">Tecnologias</h1>
            <section>
                <div className="container-skill">
                    
                    <div className='card-skill'>
                        <div className='box-skill'>
                            <div>
                                <div className='percent'>
                                    <svg className="circle">
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className='number'>
                                        <h2>82<h3>%</h3></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-skill'><h1>HTML5</h1></div>
                    </div>

                    <div className='card-skill'>
                        <div className='box-skill'>
                            <div>
                                <div className='percent'>
                                    <svg className="circle">
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className='number'>
                                        <h2>80<h3>%</h3></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-skill'><h1>CSS3</h1></div>
                    </div>

                    <div className='card-skill'>
                        <div className='box-skill'>
                            <div>
                                <div className='percent'>
                                    <svg className="circle">
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className='number'>
                                        <h2>35<h3>%</h3></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-skill'><h1>Javascript</h1></div>
                    </div>

                    <div className='card-skill'>
                        <div className='box-skill'>
                            <div>
                                <div className='percent'>
                                    <svg className="circle">
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className='number'>
                                        <h2>40<h3>%</h3></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-skill'><h1>React</h1></div>
                    </div>

                    <div className='card-skill'>
                        <div className='box-skill'>
                            <div>
                                <div className='percent'>
                                    <svg className="circle">
                                        <circle cx="70" cy="70" r="70"></circle>
                                        <circle cx="70" cy="70" r="70"></circle>
                                    </svg>
                                    <div className='number'>
                                        <h2>40<h3>%</h3></h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-skill'><h1>Typescript</h1></div>
                    </div>
                    
                    
                </div>
            </section>
        </body>
    )
}

export default Sobre;
