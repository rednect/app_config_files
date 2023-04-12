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
  O Projeto tem como objetivo a criação de um software que registra a presença de alunos para o colégio X. O software será desenvolvido com a linguagem de programação Angular CLI versão 15.1.4, afim de elaborar um sistema que atenda todas as necessidades dos Professores e Colaboradores do Colégio X.
</center></font>

# Diagrama de casos de uso

![Diagrama de Casos de Uso](https://github.com/rednect/app_config_files/blob/master/docs/diagrama_casos_de_uso.png?raw=true)

# Descrição dos casos de uso

<font size="+12"><center>
  Caso de Uso: Registrar Lista de Presença;
  
  
  Ator Principal: Professor;
  
  
  Interessados e Interesses:
  - Professor: Deseja registrar ou consultar a lista de presença dos alunos no sistema;
  - Coordenador: Deseja consultar lista de presença registrada;
  
  Pré-condições: O professor/coordenador estará autenticado, com o objetivo de registrar ou consultar as presenças de determinada aula.
  
  
  Pós-condições: A lista de presença estará registrada no sistema, assim determinando frequência dos alunos nas aulas.
  
  
  Cenário de Sucesso Principal:
  1. Professor realiza o login no sistema;
  2. Professor seleciona opção de registrar lista de presença no sistema;
  2. Professor seleciona nome de alunos presentes;
  3. Professor confirma alunos faltantes;
  4. Professor envia lista de presença ao sistema;
  5. Coordenador realiza login no sistema;
  6. Coordenador consulta lista de presença.
  
  
  Fluxos Alternativos:
  1. Credenciais do professor estão incorretas, impedindo-o de realizar o login no sistema.
  2. Professor seleciona opção de consultar lista de presença.
  5. Credenciais do coordenador estão incorretas, impedindo-o de realizar o login no sistema.
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

![Modelo de dominio](https://user-images.githubusercontent.com/89556525/221445799-88248780-de4e-41ad-ab42-a38c3ca1330f.png)

# Decisões de arquitetura

![Arquitetura](https://user-images.githubusercontent.com/89556525/221445817-49783803-7ce9-4b49-a6ff-f1ea35f0ce99.png)

# Diagrama de implantação

*&lt;Diagrama de implantação&gt;*

# Referências

*&lt;Lista de referências&gt;*
