import React, { useState, useEffect } from 'react';
import { Product } from '../../types/Product';
import './ProductShowcase.scss';

interface ProductShowcaseProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ products, onProductClick }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const tabs = [
    { id: 'celular', name: 'CELULAR', active: true },
    { id: 'acessorios', name: 'ACESSÓRIOS' },
    { id: 'tablets', name: 'TABLETS' },
    { id: 'notebooks', name: 'NOTEBOOKS' },
    { id: 'tvs', name: 'TVS' },
    { id: 'todos', name: 'VER TODOS' }
  ];

  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const startIndex = currentPage * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);



  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price / 100);
  };

  const calculateOldPrice = (price: number) => {
    // Simula um preço antigo 10% maior
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format((price * 1.1) / 100);
  };

  const calculateInstallment = (price: number) => {
    const installmentPrice = price / 200; // Divide por 2 para 2x
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(installmentPrice / 100);
  };

  // Se não há produtos, mostrar mensagem de carregamento
  if (products.length === 0) {
    return (
      <section className="product-showcase">
        <div className="showcase-container">
          <h2 className="showcase-title">Produtos relacionados</h2>
          <div className="loading-message">
            Carregando produtos...
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="product-showcase">
      <div className="showcase-container">
        <h2 className="showcase-title">Produtos relacionados</h2>
        
        <div className="showcase-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-button ${tab.active ? 'active' : ''}`}
              onClick={() => {}}
            >
              {tab.name}
            </button>
          ))}
        </div>

        <div className="product-carousel">
          <button className="carousel-button prev" onClick={prevPage}>
            ‹
          </button>
          
          <div className="product-grid">
            {currentProducts.map((product, index) => (
              <div 
                key={`${product.productName}-${index}`} 
                className="product-card"
                onClick={() => onProductClick(product)}
              >
                <div className="product-image">
                  <img src={product.photo} alt={product.productName} />
                </div>
                <div className="product-info">
                  <div className="product-content">
                    <p className="product-description">
                      {product.descriptionShort}
                    </p>
                    <div className="product-pricing">
                      <span className="old-price">{calculateOldPrice(product.price)}</span>
                      <span className="new-price">{formatPrice(product.price)}</span>
                      <span className="installment-info">
                        ou 2x de {calculateInstallment(product.price)} sem juros
                      </span>
                      <span className="free-shipping">Frete grátis</span>
                    </div>
                  </div>
                  <button className="buy-button">COMPRAR</button>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-button next" onClick={nextPage}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
