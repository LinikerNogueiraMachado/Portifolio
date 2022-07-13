import { ReactComponent as Whats } from 'assets/img/icons/WhatsappIcon.svg';
import { ReactComponent as Insta } from 'assets/img/icons/InstagramIcon.svg';

import './style.css'

function Found() {
    return (
        <body className='body-form'>
            <h1 className="title">404 Not Found</h1><hr />
            <div className="flex-container">
                <div className="content-card">
                    <h1> Obrigado por acessar meu Portifólio, entre em contato para saber mais.</h1>
                </div>
                <span className='span-found' >Meios de contato ||</span>
                <div>
                    <a className="contact-link" href="https://bit.ly/portifolio_liniker_nogueira"><Whats /></a>
                    <a className="contact-link" href="https://bit.ly/InstagramDev-Liniker"><Insta /></a>
                </div>
            </div>
        </body>
    )
}
export default Found;
