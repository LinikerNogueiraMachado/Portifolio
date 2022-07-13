import { ReactComponent as HTML5icon } from 'assets/img/icons/Html5Icon.svg';
import { ReactComponent as CSS3icon } from 'assets/img/icons/Css3Icon.svg';
import { ReactComponent as JSicon } from 'assets/img/icons/JavaScriptIcon.svg';
import { ReactComponent as Reacticon } from 'assets/img/icons/ReactIcon.svg';
import { ReactComponent as Bootstrapicon } from 'assets/img/icons/BootstrapIcon.svg';

import './style.css'

function Projetos() {
    return (
        <body>
            <div>
                <div className="flex-container">
                    <>
                        <div>
                            <h1 className='title-skills'>Tela de cadastro</h1>
                            <div className="content-card">
                                <span className='span-found'>Projeto criado em:</span>
                                <div className='icon_project'>
                                    <HTML5icon /><h2>HTML5</h2>
                                    <CSS3icon /><h2>CSS3</h2>
                                    <JSicon /><h2>JavaScript</h2>
                                </div>
                            </div>
                            <div className='box-border'>
                            </div>
                        </div>
                    </>
                    <>
                        <div>
                            <h1 className='title-skills'>Web Site</h1>
                            <div className="content-card">
                                <span className='span-found'>Projeto criado em:</span>
                                <div className='icon_project'>
                                    <HTML5icon /><h2>html5</h2>
                                    <CSS3icon /><h2>CSS3</h2>
                                    <JSicon /><h2>JavaScript</h2>
                                    <Reacticon /><h2>ReactJs</h2>
                                    <Bootstrapicon /><h2>Bootstrap5</h2>
                                </div>
                            </div>
                            <div className='box-border'>
                            </div>
                        </div>
                    </>
                </div>
            </div>
        </body >
    )
}
export default Projetos;