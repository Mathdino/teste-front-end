import React from 'react';
import './CategoryIcons.scss';

const CategoryIcons: React.FC = () => {
  const categories = [
    { id: 'tecnologia', name: 'Tecnologia', icon: '💻', active: true },
    { id: 'supermercado', name: 'Supermercado', icon: '🛒' },
    { id: 'bebidas', name: 'Bebidas', icon: '🥤' },
    { id: 'ferramentas', name: 'Ferramentas', icon: '🔧' },
    { id: 'saude', name: 'Saúde', icon: '❤️' },
    { id: 'esportes', name: 'Esportes e Fitness', icon: '🏃' },
    { id: 'moda', name: 'Moda', icon: '👗' },
    { id: 'outros', name: 'Outros', icon: '📦' }
  ];

  return (
    <section className="category-icons">
      <div className="category-container">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className={`category-card ${category.active ? 'active' : ''}`}
          >
            <div className="category-icon">{category.icon}</div>
            <span className="category-name">{category.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryIcons;
