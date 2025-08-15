import React, { useState } from 'react';
import './Header.scss';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      {/* Barra superior com informações */}
      <div className="header-top">
        <div className="header-info">
          <div className="info-item">
            <img src="/compra.png" alt="Compra segura" className="info-icon" />
            <span>Compra <strong>100% segura</strong></span>
          </div>
          <div className="info-item">
            <img src="/frete.png" alt="Frete grátis" className="info-icon" />
            <span><strong>Frete grátis</strong> acima de R$ 200</span>
          </div>
          <div className="info-item">
            <img src="/parcele.png" alt="Parcele" className="info-icon" />
            <span><strong>Parcele</strong> suas compras</span>
          </div>
        </div>
      </div>

      {/* Barra principal com logo e busca */}
      <div className="header-main">
        <div className="header-content">
          <div className="logo">
            <img src="/logo.png" alt="Econverse" className="logo-image" />
          </div>
          
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          
          <form className="search-container" role="search" aria-label="Buscar produtos">
            <label htmlFor="search-input" className="sr-only">Buscar produtos</label>
            <input 
              id="search-input"
              type="search" 
              placeholder="O que você está buscando?" 
              className="search-input"
              aria-label="Campo de busca"
            />
            <button type="submit" className="search-button" aria-label="Executar busca">
              <img src="/MagnifyingGlass.png" alt="" className="search-icon" />
            </button>
          </form>

          <div className="header-actions">
            <button className="action-button">
              <img src="/icon-header-1.png" alt="Pedidos" />
            </button>
            <button className="action-button">
              <img src="/Heart.png" alt="Favoritos" />
            </button>
            <button className="action-button">
              <img src="/UserCircle.png" alt="Usuário" />
            </button>
            <button className="action-button">
              <img src="/ShoppingCart.png" alt="Carrinho" />
            </button>
          </div>
        </div>
      </div>

      {/* Barra de navegação */}
      <nav className={`header-navigation ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <ul className="nav-list">
          <li className="nav-item">
            <a href="#todas-categorias" className="nav-link">TODAS CATEGORIAS</a>
          </li>
          <li className="nav-item">
            <a href="#supermercado" className="nav-link">SUPERMERCADO</a>
          </li>
          <li className="nav-item">
            <a href="#livros" className="nav-link">LIVROS</a>
          </li>
          <li className="nav-item">
            <a href="#moda" className="nav-link">MODA</a>
          </li>
          <li className="nav-item">
            <a href="#lancamentos" className="nav-link">LANÇAMENTOS</a>
          </li>
          <li className="nav-item">
            <a href="#ofertas" className="nav-link active">OFERTAS DO DIA</a>
          </li>
          <li className="nav-item assinature">
            <a href="#assinatura" className="nav-link">
              <img src="/CrownSimple.png" alt="Crown" className="nav-icon" />
              ASSINATURA
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
