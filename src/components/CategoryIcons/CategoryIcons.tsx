import React from 'react';
import './CategoryIcons.scss';

const CategoryIcons: React.FC = () => {
  const categories = [
    { id: 'tecnologia', name: 'Tecnologia', icon: '/pc.png', active: true },
    { id: 'supermercado', name: 'Supermercado', icon: '/supermercados.png' },
    { id: 'bebidas', name: 'Bebidas', icon: '/bebidas.png' },
    { id: 'ferramentas', name: 'Ferramentas', icon: '/ferramentas.png' },
    { id: 'saude', name: 'Saúde', icon: '/saude.png' },
    { id: 'esportes', name: 'Esportes e Fitness', icon: '/esportes.png' },
    { id: 'moda', name: 'Moda', icon: '/moda.png' },
  ];

  return (
    <section className="category-icons">
      <div className="category-container">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`category-card ${category.active ? 'active' : ''}`}
          >
            <div className="category-icon">
              <img src={category.icon} alt={category.name} />
            </div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryIcons;
