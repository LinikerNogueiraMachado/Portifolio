import { ReactComponent as IconHTML5 } from 'assets/img/icons/Html5Icon.svg';
import { ReactComponent as IconCSS3 } from 'assets/img/icons/Css3Icon.svg';
import { ReactComponent as IconJS } from 'assets/img/icons/JavaScriptIcon.svg';

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
                        aprendi como a tecnologia é extremamente útil para uma ou mais "dores" seja para entretenimento ou
                        para saúde. <br />
                        &nbsp; Hoje sou Desenvolvedor, amo de paixão o que faço.
                    </h2>
                    <hr />
                    <div className="down-cv">
                        <a href="/Curriculo/1">Visualizar cv</a>
                    </div>
                </div>
            </main>
            <div className="title-sobre">
                <h1 className="title-skills">Tecnologias</h1>
            </div>
            <hr className="hr" />

            <div className="skills">

                <div className="flex-container-skill">
                    <div className="avr">
                        <h2>HTML 5</h2>
                        <IconHTML5 />
                        <p className="portifolio-contact-link">
                            Em frequente estudo, ultilizo a linguagem de marcação hà dois anos.
                        </p>
                        <div className="container-barra">
                            <div className="barra">
                            </div>
                        </div>
                    </div>
                    <div className="avr">
                        <h2>CSS 3</h2>
                        <IconCSS3 />
                        <p className="portifolio-contact-link">
                            Em frequente estudo, ultilizo a linguagem de estilização hà dois anos
                            em conjunto com HTML5.
                        </p>
                        <div className="container-barra">
                            <div className="barra">
                            </div>
                        </div>
                    </div>
                    <div className="avr">
                        <h2>JavaScript</h2>
                        <IconJS />
                        <p className="portifolio-contact-link">
                            Em frequente estudo.
                        </p>
                        <div className="container-barra">
                            <div className="barra">
                            </div>
                        </div>
                    </div>
                    <div className="avr">
                        <h2>CSS 3</h2>
                        <IconCSS3 />
                        <p className="portifolio-contact-link">
                            Em frequente estudo, ultilizo a linguagem de estilização hà dois anos
                            em conjunto com HTML5.
                        </p>
                        <div className="container-barra">
                            <div className="barra">
                            </div>
                        </div>
                    </div>
                    <div className="avr">
                        <h2>HTML 5</h2>
                        <IconHTML5 />
                        <p className="portifolio-contact-link">
                            Em frequente estudo, ultilizo a linguagem de marcação hà dois anos.
                        </p>
                        <div className="container-barra">
                            <div className="barra">
                            </div>
                        </div>
                    </div>
                    <div className="avr">
                        <h2>CSS 3</h2>
                        <IconCSS3 />
                        <p className="portifolio-contact-link">
                            Em frequente estudo, ultilizo a linguagem de estilização hà dois anos
                            em conjunto com HTML5.
                        </p>
                        <div className="container-barra">
                            <div className="barra">
                            </div>
                        </div>
                    </div>
                </div>
            </div> <br />
        </body>
    )
}

export default Sobre;
