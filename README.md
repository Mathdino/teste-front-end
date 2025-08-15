# Econverse - E-commerce de Tecnologia

Um e-commerce moderno desenvolvido em React e TypeScript, seguindo fielmente o layout especificado com foco em produtos de tecnologia.

## 🛠️ Tecnologias Utilizadas

- React 18.2.0
- TypeScript 4.9.0
- Sass 1.69.0
- React Scripts 5.0.1

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes React
│   ├── Header/          # Cabeçalho com navegação
│   ├── HeroBanner/      # Banner promocional Black Friday
│   ├── CategoryIcons/   # Ícones das categorias
│   ├── ProductShowcase/ # Vitrine de produtos
│   ├── ProductModal/    # Modal de detalhes do produto
│   └── Partners/        # Seção de parceiros
├── styles/              # Arquivos SCSS
│   ├── index.scss       # Estilos globais
│   └── App.scss         # Estilos do App principal
├── types/               # Definições TypeScript
│   └── Product.ts       # Interface do produto
├── App.tsx              # Componente principal
└── index.tsx            # Ponto de entrada
```

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação

1. **Clone o repositório**:
   ```bash
   git clone <url-do-repositorio>
   cd teste-front-end
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```

3. **Execute o projeto em modo de desenvolvimento**:
   ```bash
   npm start
   ```

4. **Abra o navegador**:
   O projeto será aberto automaticamente em `http://localhost:3000`

### Scripts Disponíveis

- `npm start` - Executa o projeto em modo de desenvolvimento
- `npm run build` - Cria a versão de produção
- `npm test` - Executa os testes
- `npm run eject` - Ejeita as configurações (não recomendado)

## 🧪 Como Testar

### Testes Automatizados
```bash
npm test
```

### Testes de Produção
```bash
npm run build
npm install -g serve
serve -s build
```
## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints em:
- **Desktop**: 1024px+
- **Tablet**: 768px - 1023px
- **Mobile**: 480px - 767px
- **Mobile Pequeno**: < 480px

## 🚀 Deploy

### Build de Produção
```bash
npm run build
```

### Servidor de Produção
```bash
npm install -g serve
serve -s build
```
---

**Desenvolvido por Matheus Bernardino usando React, TypeScript e Sass**
