import React, { useState } from 'react';
import { Product } from '../../types/Product';
import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price / 100);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="product-modal">
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-content">
          <div className="modal-left">
            <div className="product-images">
              <img 
                src={product.photo} 
                alt={product.productName} 
                className="main-image"
              />
            </div>
          </div>
          
          <div className="modal-right">
            <h2 className="product-name">
              {product.productName.toUpperCase()}
            </h2>
            
            <div className="product-price">
              {formatPrice(product.price)}
            </div>
            
            <p className="product-description">
              Many desktop publishing packages and web page editors now many desktop publishing
            </p>
            
            <a href="#detalhes" className="product-details-link">
              Veja mais detalhes do produto &gt;
            </a>
            
            <div className="quantity-selector">
              <button 
                className="quantity-btn minus" 
                onClick={decreaseQuantity}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input 
                type="text" 
                value={quantity.toString().padStart(2, '0')} 
                readOnly 
                className="quantity-input"
              />
              <button 
                className="quantity-btn plus" 
                onClick={increaseQuantity}
              >
                +
              </button>
            </div>
            
            <button className="modal-buy-button">
              COMPRAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
