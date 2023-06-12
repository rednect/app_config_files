<h2><a href= "https://www.mackenzie.br">Universidade Presbiteriana Mackenzie</a></h2>
<h3><a href= "https://www.mackenzie.br/graduacao/sao-paulo-higienopolis/sistemas-de-informacao">Sistemas de Informação</a></h3>

<font size="+12"><center>Sistema de Presença</center></font>

**Conteúdo**

- [Autores](#autores)
- [Descrição do projeto](#descrição-do-projeto)
- [Diagrama de casos de uso](#diagrama-de-casos-de-uso)
- [Descrição dos casos de uso](#descrição-dos-casos-de-uso)
- [Protótipos de tela](#protótipos-de-tela)
- [Modelo de domínio](#modelo-de-domínio)
- [Decisões de arquitetura](#decisões-de-arquitetura)
- [Diagrama de implantação](#diagrama-de-implantação)
- [Referências](#referências)

# Autores

* Ana Giulia Gonçalves Tavares
* Giovanna Catelli
* Lucas Braga Borba
* Pedro Cordeiro Franco

# Descrição do projeto

<font size="+12"><center>
  O Projeto tem como objetivo a criação de um software que registra a presença de alunos para o colégio X, a fim de otimizar todo o processo de registro de presença da escola e facilitar o processo para os usuários.
</center></font>

# Diagrama de casos de uso

![Diagrama de Casos de Uso](https://github.com/rednect/app_config_files/blob/master/docs/diagrama_casos_de_uso_2.0.png?raw=true)

# Descrição dos casos de uso

<font size="+12"><center>
  CASO DE USO: Realizar Login
  
  Ator Principal: Professor;
  
  Interessados e Interesses:
  - Professor: Deseja ingressar no sistema por meio de suas credenciais para registrar/consultar a presença dos alunos;
  - Coordenador: Deseja ingressar no sistema por meio de suas credenciais para consultar a presença dos alunos;
  
  
  Cenário de Sucesso Principal: 
  1. Professor acessa página web de Login do Sistema por meio de uma URL;
  2. Professor insere credenciais com TIA e senha;
  3. Autenticação realizada com sucesso e professor será direcionado a outra página web;
  4. Coordenador página web de Login do Sistema por meio de uma URL;
  5. Coordenador insere credenciais com TIA e senha;
  6. Autenticação realizada com sucesso e coordenador será direcionado a outra página web;
  
  
  
  
  CASO DE USO: Registrar Lista de Presença
  
  
  Ator Principal: Professor;
  
  
  Interessados e Interesses:
  - Professor: Deseja registrar ou consultar a lista de presença dos alunos no sistema;
  
  
  Cenário de Sucesso Principal:
  1. Professor realiza o login no sistema;
  2. Professor seleciona opção de registrar lista de presença no sistema;
  3 Professor seleciona nome de alunos presentes;
  
  
  CASO DE USO: Enviar Lista de Presença
  
  
  Ator Principal: Professor;
  
  
  Cenário de Sucesso Principal:
  1. Professor visualiza alunos faltantes selecionados;
  2. Professor confirma seleção de alunos faltantes;
  3. Professor faz envio de lista de presença no sistema. 
  
  
  CASO DE USO: Consultar Lista de Presença
  
  Ator Principal: Coordenador;
  
  Cenário de Sucesso Principal:
  1. Coordenador seleciona turma e data que deseja consultar a lista de presença;
  2. Coordenador é direcionado à Lista de Presença para consulta;
  3. Professor seleciona turma e data que deseja consultar a lista de presença;
  4. Professor é direcionado à Lista de Presença para consulta.
  
  </center></font>

# Protótipos de tela

  
![login](https://github.com/rednect/app_config_files/blob/master/docs/prototipo_login.png?raw=true)
![home](https://github.com/rednect/app_config_files/blob/master/docs/prototipo_home.png?raw=true)



<font size="+12"><center>
  Registrar Lista de Presença
</center></font>

![registrar1](https://github.com/rednect/app_config_files/blob/master/docs/prototipo_registrar1.png?raw=true)
![registrar2](https://github.com/rednect/app_config_files/blob/master/docs/prototipo_registrar2.png?raw=true)
![registrar3](https://github.com/rednect/app_config_files/blob/master/docs/prototipo_registrar3.png?raw=true)


<font size="+12"><center>
  Consultar Lista de Presença
</center></font>

![consultar1](https://github.com/rednect/app_config_files/blob/master/docs/prototipo_consultar1.png?raw=true)
![consultar2](https://github.com/rednect/app_config_files/blob/master/docs/prototipo_consultar2.png?raw=true)


# Modelo de domínio

![PPADS diagrama-Page-1 drawio](https://github.com/rednect/app_config_files/assets/89556525/7a3f5306-b85e-4d40-8040-c3a10260a9fb)

# Decisões de arquitetura

<font size="+12"><center>
  O Projeto será desenvolvido na linguagem de programação Angular CLI 13.
  
  O Banco de dados será desenvolvido e gerenciado por meio do sistema PostgreSQL. 
  
</center></font>

# Diagrama de implantação

![Diagrama de Implantação](https://github.com/rednect/app_config_files/blob/master/docs/Diagrama%20de%20Implanta%C3%A7%C3%A3o.png?raw=true)

# Planos de Teste
![Plano de Teste](https://github.com/rednect/app_config_files/blob/master/docs/Script%20Teste%201.png?raw=true)


![Plano de Teste](https://github.com/rednect/app_config_files/assets/88154125/439df11c-61e1-436b-b271-ffa395bbe795)


![Plano de Teste](https://github.com/rednect/app_config_files/blob/master/docs/script%20teste%201%20(3).png?raw=true)


![Plano de Teste](https://github.com/rednect/app_config_files/blob/master/docs/Script%20teste%202.png?raw=true)

# Referências

https://www.lucidchart.com/pages/pt/diagrama-de-casos-de-uso


https://www.smashingmagazine.com/2022/01/ux-ui-prototyping-tools-comparison-guide/


https://www.infoq.com/architecture-design/


https://www.visual-paradigm.com/guide/uml-unified-modeling-language/uml-deployment-diagram-tutorial/
