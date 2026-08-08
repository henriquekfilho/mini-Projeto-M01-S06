# Repositório do mini projeto do curso de Front end React - SCTEC

## 📌 SkillMatch – Analisador de Vagas
###### Este projeto em JavaScript tem como objetivo analisar a compatibilidade entre um candidato e diferentes vagas de emprego, aplicando conceitos de programação orientada a objetos, funções de array, callbacks, closures e programação assíncrona com Promise e async/await.

## 🚀 Fluxo do Programa
###### Perfil do candidato é criado com nome, área, habilidades e experiência.

#### *RF01 – Criar o perfil do candidato*

###### Lista de vagas é definida com empresa, cargo e requisitos.

#### *RF02 – Criar uma lista de vagas*

###### Para cada vaga, o programa calcula a compatibilidade com base nas habilidades do candidato.

#### *RF03 – Calcular compatibilidade com cada vaga*

###### O percentual é classificado em alta, média ou baixa compatibilidade.

#### *RF04 – Classificar a compatibilidade*

###### São listadas as habilidades faltantes que o candidato ainda não possui.

#### *RF05 – Listar habilidades faltantes*

###### O programa encontra a vaga mais compatível usando reduce.

#### *RF06 – Encontrar a vaga com maior compatibilidade*

###### Com base nas habilidades faltantes, gera uma recomendação de estudo.

#### *RF07 – Gerar uma recomendação de estudo*

## 🛠️ Conceitos de Programação Demonstrados
### Métodos de array: forEach, filter, reduce

#### *RF08 – Usar métodos de array*

###### Classes: Pessoa, Candidato, Vaga

#### *RF09 – Criar uma classe*

###### Herança: Candidato herda de Pessoa

#### *RF10 – Usar herança*

###### Uso do this: dentro das classes para acessar atributos

#### *RF11 – Demonstrar uso do this*

###### Callback: funções passadas para forEach e filter

#### *RF12 – Usar callback*

###### Closure: funções anônimas acessando variáveis externas

#### *RF13 – Usar closure*

###### Promise e async/await: simulação de busca de vagas externas

#### *RF14 – Usar Promise e async/await*

## 📂 Estrutura do Código

###### // Classe base Pessoa
###### class Pessoa { ... }

###### // Classe Candidato (herda de Pessoa)
###### class Candidato extends Pessoa { ... }

###### // Classe Vaga
###### class Vaga { ... }

###### // Funções de compatibilidade e classificação
###### function calcularCompatibilidade(...) { ... }
###### function classificarCompatibilidade(...) { ... }

###### // Promise simulando busca de vagas
###### function buscarVagas() { ... }

###### // Função principal assíncrona
###### async function analisarCandidato(candidato) { ... }

###### // Criação do candidato e execução
###### const candidato = new Candidato("Henrique", "Front-End", ["HTML", "CSS", "JavaScript"], 1);
###### analisarCandidato(candidato);

## 📊 Exemplo de Saída no Console

###### Empresa: TechCorp
###### Cargo: Front-End Júnior
###### Compatibilidade: 75.00% - Média compatibilidade
###### Habilidades faltantes: React
###### ---------------------------------------------------
###### Henrique, a vaga mais compatível é na TechCorp
###### Sugestão de estudo: React