🏥 Lacrei Saúde - Desafio Front-end

Projeto desenvolvido com foco em acessibilidade, performance e padronização visual, seguindo princípios de experiência inclusiva e boas práticas modernas de desenvolvimento front-end.

---

🚀 Tecnologias utilizadas

- Next.js
- React
- TypeScript
- Styled-components
- Jest
- Testing Library

---

📁 Estrutura do projeto

src/
  components/
  __tests__/
  pages/

A estrutura foi organizada visando separação clara de responsabilidades, facilitando manutenção e escalabilidade.

---

⚙️ Como rodar o projeto

1. Clone o repositório

git clone https://github.com/Nathaly00210/lacrei-saude-frontend.git

2. Acesse a pasta

cd lacrei-saude-frontend

3. Instale as dependências

npm install

4. Rode o projeto

npm run dev

O projeto estará disponível em:
http://localhost:3000

---

🧪 Testes

Os testes unitários foram implementados com foco em garantir a renderização correta e comportamento básico dos componentes principais da interface.

Para rodar:

npm test

✔ Componentes testados
- Button
- Header
- Footer

---

📊 Qualidade (Lighthouse)

- ⚡ Performance: 91
- ♿ Acessibilidade: 100
- ✅ Boas práticas: 100
- 🔎 SEO: 100

---

⚡ Performance

A aplicação utiliza recursos do Next.js que contribuem diretamente para a performance:

- Renderização otimizada (SSR/CSR híbrido)
- Code splitting automático
- Carregamento sob demanda de páginas
- Estrutura preparada para uso de lazy loading em componentes
- Redução de re-renderizações com componentes reutilizáveis

Essas estratégias resultam em melhor tempo de carregamento e experiência mais fluida para o usuário.

---

📱 Responsividade

O projeto foi desenvolvido com abordagem mobile-first, garantindo adaptação consistente em diferentes tamanhos de tela.

---

♿ Acessibilidade

Além das métricas do Lighthouse, foram aplicadas práticas como:

- Uso de HTML semântico (header, main, nav, section, footer)
- Navegação estruturada com landmarks
- Uso de atributos ARIA (aria-label) para melhorar compreensão por leitores de tela
- Estados de foco visíveis para navegação via teclado
- Contraste de cores validado para garantir legibilidade
- Hierarquia correta de títulos (h1, h2...)

Essas práticas garantem que a aplicação seja utilizável por diferentes perfis de usuários, incluindo pessoas que utilizam tecnologias assistivas.

---

🎨 Aplicação do Design System

A interface foi construída com base no Marsha Design System, com foco em consistência visual e experiência do usuário.

Foram aplicados:

- Cor principal (#018762) utilizada em botões e destaques
- Uso de cores neutras (#FFFFFF e #2D2D2D) para garantir contraste e legibilidade
- Tipografia baseada na fonte Nunito, garantindo hierarquia visual entre títulos e textos
- Espaçamento padronizado (padding e margin) para manter organização e leitura fluida
- Estrutura centralizada com largura máxima (container), seguindo padrões de layout modernos

Essas decisões visuais foram adotadas para aproximar a interface de um produto real, mantendo coerência com o Design System proposto.

---

🔘 Funcionalidades

- Navegação entre páginas funcional
- Botões interativos com ações reais
- Componentização reutilizável

---

🌐 Deploy

👉 https://lacrei-saude-frontend-iota.vercel.app/

A aplicação foi publicada utilizando a Vercel, aproveitando sua integração nativa com projetos Next.js.

---

🔄 Rollback

O versionamento da aplicação é gerenciado automaticamente pela Vercel.

Cada novo deploy gera uma versão independente, permitindo:

- Visualizar versões anteriores
- Restaurar rapidamente um deploy estável
- Testar mudanças em ambientes isolados (preview deployments)

Isso garante segurança e controle em ambiente de produção.

---

🧠 Decisões técnicas

- Next.js: escolhido pela otimização automática, SSR e melhor performance
- TypeScript: maior segurança e previsibilidade no desenvolvimento
- Styled-components: encapsulamento de estilos e reutilização de componentes
- Jest + Testing Library: foco em testes de comportamento e confiabilidade
- Mocks no Jest: utilizados para lidar com dependências do Next.js (ex: fontes)

---

🟡 Diferenciais

- Configuração completa de testes em ambiente Next.js
- Integração de ferramentas modernas de front-end
- Preocupação com acessibilidade e experiência do usuário
- Estrutura preparada para crescimento e manutenção

---

🧩 Possíveis melhorias futuras

- Integração real com API para consumo de dados dinâmicos
- Implementação de testes mais abrangentes (interação e acessibilidade)
- Uso de next/image para otimização completa de imagens
- Refinamento contínuo da interface com base em feedback de usuários

---

👩‍💻 Autora

Desenvolvido por Naty
