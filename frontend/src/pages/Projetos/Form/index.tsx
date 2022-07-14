import './styleform.css';

function Form() {
    return (
        <>
            <div id="Form-container">
                <h1 className='h1-form'>Cadastre-se para acessar</h1>
                <form id="register-form">
                    <div className="full-box">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" name="email" id="email" placeholder="Digite seu E-mail:" data-min-length="10"
                            data-required data-email-validate />
                    </div>
                    <div className="half-box spacing">
                        <label htmlFor="name">Nome</label>
                        <input type="text" name="name" id="name" placeholder="Digite seu nome:" data-max-length="8"
                            data-required data-only-letters />
                    </div>
                    <div className="half-box">
                        <label htmlFor="lastname">Sobrenome</label>
                        <input type="text" name="lastname" id="lastname" placeholder="Digite seu sobrenome:" data-required />
                    </div>
                    <div className="half-box spacing">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" placeholder="Digite sua senha:" data-required
                            data-password-validate />
                    </div>
                    <div className="half-box">
                        <label htmlFor="passconfirmation">Confirme senha</label>
                        <input type="password" name="passconfirmation" id="passconfirmation" placeholder="Confirme sua senha:"
                            data-required data-equal='password' />
                    </div>
                    <div className="full-box">
                        <input type="checkbox" name="agreement" id="agreement" />
                        <label htmlFor="email" id="agreement-label">Li e aceito os <a className='a-form' href="/Found/1">termos de uso</a></label>
                    </div>
                    <div className='full-box'>
                        <input type="submit" id="btn-submit" value="Registrar" />
                    </div>
                </form>
            </div>
            <p className='error-validation template'></p>
            <script src="scripts.js"></script>
        </>
    )
}
export default Form;