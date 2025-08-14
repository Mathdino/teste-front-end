import React from 'react';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      {/* Barra superior com informações */}
      <div className="header-top">
        <div className="header-info">
          <div className="info-item">
            <span className="icon">✓</span>
            <span>Compra 100% segura</span>
          </div>
          <div className="info-item">
            <span className="icon">🚚</span>
            <span>Frete grátis acima de R$ 200</span>
          </div>
          <div className="info-item">
            <span className="icon">💳</span>
            <span>Parcele suas compras</span>
          </div>
        </div>
      </div>

      {/* Barra principal com logo e busca */}
      <div className="header-main">
        <div className="header-content">
          <div className="logo">
            <span className="logo-icon">e</span>
            <span className="logo-text">econverse</span>
          </div>
          
          <div className="search-container">
            <input 
              type="text" 
              placeholder="O que você está buscando?" 
              className="search-input"
            />
            <button className="search-button">
              <span className="search-icon">🔍</span>
            </button>
          </div>

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
      <nav className="header-navigation">
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
          <li className="nav-item">
            <a href="#assinatura" className="nav-link">ASSINATURA</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
