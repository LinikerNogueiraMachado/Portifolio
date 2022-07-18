import { ReactComponent as HTML5icon } from 'assets/img/icons/Html5Icon.svg';
import { ReactComponent as CSS3icon } from 'assets/img/icons/Css3Icon.svg';
import { ReactComponent as JSicon } from 'assets/img/icons/JavaScriptIcon.svg';
import { ReactComponent as Reacticon } from 'assets/img/icons/ReactIcon.svg';
import { ReactComponent as Bootstrapicon } from 'assets/img/icons/BootstrapIcon.svg';
import PagForm from '../../assets/img/PagForm.png';
import TelaCn from '../../assets/img/tela-cn.png';

import './style.css'
import { NavLink } from 'react-router-dom';

function Projetos() {
    return (
        <body>
            <div>
                <div className="flex-container">
                    <>
                        <div>
                            <h1 className='title-skills'>Tela de formulário</h1>
                            <div className="content-card">
                                <span className='span-found'>Projeto criado em:</span>
                                <div className='icon_project'>
                                    <HTML5icon className='icon' /><h4>HTML5</h4>
                                    <CSS3icon className='icon' /><h4>CSS3</h4>
                                    <JSicon className='icon' /><h4>JavaScript</h4>
                                </div>
                            </div>
                            <div className='box-border'><NavLink to='/Form/1'>
                                <img src={PagForm} /> </NavLink>
                            </div>
                        </div>
                    </>
                    <>
                        <div>
                            <h1 className='title-skills'>Menu customizado</h1>
                            <div className="content-card">
                                <span className='span-found'>Projeto criado em:</span>
                                <div className='icon_project'>
                                    <HTML5icon className='icon' /><h4>HTML5</h4>
                                    <CSS3icon className='icon' /><h4>CSS3</h4>
                                    <JSicon className='icon' /><h4>JavaScript</h4>
                                    <Bootstrapicon className='icon' /><h4>Bootstrap 5</h4>
                                    <Reacticon className='icon' /><h4>React</h4>
                                </div>
                            </div>
                            <div className='box-border'><NavLink to='/CustomNude/1'>
                                <img src={TelaCn} /> </NavLink>
                            </div>
                        </div>
                    </>

                </div>
            </div>
        </body >
    )
}
export default Projetos;