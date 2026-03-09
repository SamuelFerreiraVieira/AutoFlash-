MISSÃO AUTO FLASH: BACK-END & REFATORAÇÃO
Estado Atual: O Frontend possui três páginas base: Inicial, Carrinho e Agendamento. No momento, como o sistema de rotas (React Router) ainda não foi totalmente integrado aos botões, o acesso a cada uma delas deve ser feito manualmente através da URL do navegador (ex: /carrinho, /agendamento).

Além disso, a estrutura visual da inicial.jsx ainda está concentrada em um único arquivo ("monólito"), aguardando a refatoração.

🚩 O QUE DEVE SER FEITO (TO-DO LIST)
1. Refatoração e Organização do Front
Isolar Componentes: Retirar as seções HeroSection, AboutSection e ContactSection de dentro da inicial.jsx e movê-las para a pasta src/components/ui/.

Padronização de Extensões: Garantir que todos os arquivos com JSX utilizem a extensão .jsx para evitar erros no Vite.

Uso de Constantes: Utilizar o arquivo src/lib/constants.jsx para gerenciar listas de produtos e serviços.

2. Sistema de Rotas e Navegação
Implementar React Router: Configurar as rotas para as 3 páginas já existentes (Inicial, Carrinho e Agendamento).

Ativação dos Botões: Vincular os botões de "Pedir Agora", "Agendar" e o ícone do Carrinho às suas respectivas páginas, eliminando a necessidade de digitar a rota manualmente na URL.

3. Desenvolvimento do Back-end (Java/Spring Boot)
Criação da API: Desenvolver o servidor na pasta /back para processar os dados dos formulários.

Integração de Dados: Criar endpoints para salvar os agendamentos e listar os produtos dinamicamente.

Conexão via Axios: Configurar os serviços no front para comunicação real com o banco de dados.

🚀 COMO EXECUTAR O PROJETO
Clone o Repo: git clone [URL_DO_REPOSITORIO]

Acesse o Front: cd autoflash-monorepo/front

Instale as Dependências: npm install

Inicie o Vite: npm run dev

Acesso Manual: Enquanto os botões não são mapeados, digite /agendamento ou /carrinho na URL para visualizar as páginas.
