# Econverse - E-commerce de Tecnologia

Um e-commerce moderno desenvolvido em React e TypeScript, seguindo fielmente o layout especificado com foco em produtos de tecnologia.

## 🚀 Características

- **Design Fiel ao Layout**: Implementação exata conforme as especificações visuais
- **React + TypeScript**: Desenvolvido com as melhores práticas e tipagem forte
- **Sass/SCSS**: Estilização com pré-processador para melhor organização
- **Componentização**: Arquitetura modular e reutilizável
- **Responsivo**: Design adaptável para todos os dispositivos
- **SEO Otimizado**: Meta tags e estrutura semântica para melhor indexação
- **Interatividade**: Modal de produtos com funcionalidades completas

## 🎨 Design e Cores

- **Tipografia**: Poppins (Google Fonts)
- **Cores Principais**:
  - Azul: `#3442B5`
  - Amarelo: `#F7CA11`
- **Layout**: Header com 3 barras, banner promocional, categorias, vitrine de produtos e seção de parceiros

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

### Verificação de Qualidade
- **TypeScript**: Verificação de tipos automática
- **ESLint**: Análise de código
- **Responsividade**: Teste em diferentes resoluções

## 📱 Funcionalidades

### Header
- Barra superior com informações de segurança e frete
- Logo "econverse" com busca integrada
- Navegação principal com destaque para "OFERTAS DO DIA"

### Banner Promocional
- Design Black Friday com efeitos neon
- Texto promocional "50% Off nos produtos"
- Botão de call-to-action

### Categorias
- Grid responsivo de categorias
- Destaque para "Tecnologia" (ativa)
- Ícones representativos para cada categoria

### Vitrine de Produtos
- Carrossel de produtos com navegação
- Abas para diferentes tipos de produtos
- Cards com preços, descrições e botões de compra
- Integração com dados do `banco.json`

### Modal de Produto
- Detalhes completos do produto selecionado
- Seletor de quantidade
- Botão de compra
- Fechamento por clique no overlay ou botão X

### Seção de Parceiros
- Cards com fundo escuro e efeitos visuais
- Botões de ação "CONFIRA"

## 🔧 Configurações

### Variáveis de Ambiente
O projeto não requer variáveis de ambiente específicas para funcionamento básico.

### Personalização de Cores
As cores principais podem ser alteradas no arquivo `src/styles/index.scss`:
```scss
:root {
  --primary-blue: #3442B5;
  --primary-yellow: #F7CA11;
}
```

## 📊 Dados dos Produtos

Os produtos são carregados do arquivo `banco.json` localizado na pasta `public/`. A estrutura dos dados inclui:
- Nome do produto
- Descrição curta
- URL da foto
- Preço em centavos

## 🌐 SEO e Acessibilidade

- **Meta Tags**: Título, descrição e palavras-chave otimizadas
- **Open Graph**: Suporte para compartilhamento em redes sociais
- **HTML Semântico**: Uso correto de tags semânticas
- **Alt Text**: Descrições alternativas para imagens
- **Estrutura de Cabeçalhos**: Hierarquia H1-H6 adequada

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

### Deploy em Serviços
- **Netlify**: Arraste a pasta `build/` para o Netlify
- **Vercel**: Conecte o repositório e faça deploy automático
- **GitHub Pages**: Use `gh-pages` package

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Para dúvidas ou suporte, entre em contato através de:
- Issues do GitHub
- Email: [seu-email@exemplo.com]

## 🔄 Atualizações

### Versão 1.0.0
- Implementação inicial do layout
- Componentes React com TypeScript
- Estilos SCSS responsivos
- Modal de produtos funcional
- Integração com dados JSON

---

**Desenvolvido com ❤️ usando React, TypeScript e Sass**
