import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <section className="newsletter-section" aria-label="Newsletter">
        <div className="newsletter-container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Inscreva-se na nossa newsletter</h3>
            <p className="newsletter-subtitle">
              Assine a nossa newsletter e receba as novidades e promoções exclusivas da Converse.
            </p>
          </div>
          <form className="newsletter-form" aria-label="Formulário de newsletter">
            <div className="form-group">
              <label htmlFor="newsletter-name" className="sr-only">Nome</label>
              <input 
                id="newsletter-name"
                type="text" 
                placeholder="Digite seu nome" 
                className="form-input"
                required
                aria-label="Digite seu nome"
              />
              <label htmlFor="newsletter-email" className="sr-only">E-mail</label>
              <input 
                id="newsletter-email"
                type="email" 
                placeholder="Digite seu e-mail" 
                className="form-input"
                required
                aria-label="Digite seu e-mail"
              />
              <button type="submit" className="subscribe-btn">INSCREVER</button>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" id="terms" className="checkbox" required />
              <label htmlFor="terms" className="checkbox-label">
                Aceito os termos e condições
              </label>
            </div>
          </form>
        </div>
      </section>

      {/* Footer Links Section */}
      <div className="footer-links-section">
        <div className="footer-container">
          <div className="footer-content">
            {/* Logo and Description */}
            <div className="footer-brand">
              <img src="/logo.png" alt="Converse" className="footer-logo" />
              <p className="footer-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <div className="social-links">
                <a href="#" className="social-link">
                  <img src="/instagram.png" alt="Instagram" />
                </a>
                <a href="#" className="social-link">
                  <img src="/facebook.png" alt="Facebook" />
                </a>
                <a href="#" className="social-link">
                  <img src="/linkedin.png" alt="LinkedIn" />
                </a>
              </div>
            </div>

            {/* Footer Links */}
            <nav className="footer-links" aria-label="Links do rodapé">
              <div className="link-column">
                <h4 className="column-title">Institucional</h4>
                <ul className="link-list">
                  <li><a href="#sobre-nos" aria-label="Sobre Nós">Sobre Nós</a></li>
                  <li><a href="#nascimento" aria-label="Nascimento">Nascimento</a></li>
                  <li><a href="#trabalhe-conosco" aria-label="Trabalhe conosco">Trabalhe conosco</a></li>
                </ul>
              </div>

              <div className="link-column">
                <h4 className="column-title">Ajuda</h4>
                <ul className="link-list">
                  <li><a href="#suporte" aria-label="Suporte">Suporte</a></li>
                  <li><a href="#fale-conosco" aria-label="Fale Conosco">Fale Conosco</a></li>
                  <li><a href="#faq" aria-label="Perguntas Frequentes">Perguntas Frequentes</a></li>
                </ul>
              </div>

              <div className="link-column">
                <h4 className="column-title">Termos</h4>
                <ul className="link-list">
                  <li><a href="#termos" aria-label="Termos e Condições">Termos e Condições</a></li>
                  <li><a href="#privacidade" aria-label="Política de Privacidade">Política de Privacidade</a></li>
                  <li><a href="#trocas" aria-label="Troca e Devolução">Troca e Devolução</a></li>
                </ul>
              </div>
            </nav>
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p className="copyright">
              ©Matheus Bernardino | Desenvolvedor Front-End
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;