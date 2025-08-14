import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CategoryIcons from './components/CategoryIcons/CategoryIcons';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Partners from './components/Partners/Partners';
import ProductModal from './components/ProductModal/ProductModal';
import { Product } from './types/Product';
import './styles/App.scss';

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      console.log('App - Iniciando fetch dos produtos...');
      const response = await fetch('/banco.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      console.log('App - Dados recebidos:', data);
      
      if (data.success && data.products) {
        console.log('App - Produtos carregados com sucesso:', data.products.length);
        setProducts(data.products);
      } else {
        throw new Error('Formato de dados inválido');
      }
    } catch (error) {
      console.error('App - Erro ao carregar produtos:', error);
      setError(error instanceof Error ? error.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductClick = (product: Product) => {
    console.log('App - Produto clicado:', product);
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  // Debug: verificar estado dos produtos
  useEffect(() => {
    console.log('App - Estado atual dos produtos:', products);
    console.log('App - Loading:', isLoading);
    console.log('App - Error:', error);
  }, [products, isLoading, error]);

  return (
    <div className="app">
      <Header />
      <HeroBanner />
      <CategoryIcons />
      <ProductShowcase 
        products={products} 
        onProductClick={handleProductClick} 
      />
      <Partners />
      
      {isModalOpen && selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default App;
