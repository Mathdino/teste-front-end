import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import HeroBanner from './components/HeroBanner/HeroBanner';
import CategoryIcons from './components/CategoryIcons/CategoryIcons';
import ProductShowcase from './components/ProductShowcase/ProductShowcase';
import Partners from './components/Partners/Partners';
import BrandNavigation from './components/BrandNavigation/BrandNavigation';
import Footer from './components/Footer/Footer';
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
      
      const response = await fetch('/banco.json');
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      
      if (data.success && data.products) {
        setProducts(data.products);
      } else {
        throw new Error('Formato de dados inválido');
      }
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
      setError(error instanceof Error ? error.message : 'Erro desconhecido');
    } finally {
      setIsLoading(false);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };



  return (
    <div className="app">
      <Header />
      <main>
        <HeroBanner />
        <section aria-label="Categorias de produtos">
          <CategoryIcons />
        </section>
        <section aria-label="Produtos em destaque">
          <ProductShowcase 
            products={products} 
            onProductClick={handleProductClick} 
          />
        </section>
        <section aria-label="Produtos relacionados">
          <ProductShowcase 
            products={products} 
            onProductClick={handleProductClick} 
          />
        </section>
        <section aria-label="Parceiros">
          <Partners />
        </section>
        <section aria-label="Navegação por marcas">
          <BrandNavigation />
        </section>
      </main>
      <Footer />
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
