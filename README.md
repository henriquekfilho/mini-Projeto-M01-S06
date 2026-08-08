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

###### Métodos de array: forEach, filter, reduce

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

## 📂 Estrutura do Código X Requisitos funcionais

###### // RF01 – Criar perfil do candidato
###### const candidato = new Candidato("Henrique", "Front-End", ["HTML", "CSS", "JavaScript"], 1);

###### // RF02 - lista de vagas
###### // RF14 – Promise simulando busca de vagas 
###### function buscarVagas() {
######   return new Promise((resolve) => {
######     setTimeout(() => {
######       resolve([
######         new Vaga("TechCorp", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "React"]),
######         new Vaga("WebSolutions", "Front-End Júnior", ["HTML", "CSS", "Vue", "Git"]),
######         new Vaga("StartupX", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "TypeScript"])
######       ]);
######     }, 1000);
######   });

###### // RF03 – Calcular compatibilidade
######   calcularCompatibilidade(candidato) {
###### // RF12 – Callback: função passada para filter
###### // RF13 – Closure: função acessa variável externa (candidato)
######     const habilidadesComuns = this.requisitos.filter(req =>
######       candidato.habilidades.includes(req)
######     );
######     const percentual = (habilidadesComuns.length / this.requisitos.length) * 100;
######     return percentual;

###### // RF04 – Classificar compatibilidade
###### function classificarCompatibilidade(percentual) {
######   if (percentual >= 80) return "Alta compatibilidade";
######   else if (percentual >= 50) return "Média compatibilidade";
######   else return "Baixa compatibilidade";

###### // RF05 – Listar habilidades faltantes
######   listarFaltantes(candidato) {
######     return this.requisitos.filter(req => !candidato.habilidades.includes(req));

###### // RF06 – Encontrar a vaga mais compatível (reduce)
######   const vagaMaisCompativel = vagas.reduce((melhor, vaga) => {
######     return vaga.calcularCompatibilidade(candidato) > melhor.calcularCompatibilidade(candidato) ? vaga : melhor;
######   });

###### // RF07 – Recomendação de estudo
######   const recomendacao = vagaMaisCompativel.listarFaltantes(candidato);
######   console.log(`Sugestão de estudo: ${recomendacao.join(", ") || "Já possui todas as habilidades!"}`);

###### // RF08 – Usar métodos de array (forEach)
######   vagas.forEach(vaga => {
######     const percentual = vaga.calcularCompatibilidade(candidato);
######     const classificacao = classificarCompatibilidade(percentual);
######     const faltantes = vaga.listarFaltantes(candidato);

###### // RF09 – Criar uma classe base
###### // RF10 – Usar herança
###### // RF11 – Demonstrar uso do this
###### class Pessoa {
######   constructor(nome, area, habilidades, experiencia) {
######     this.nome = nome;          // uso do this para acessar atributos
######     this.area = area;
######     this.habilidades = habilidades;
######     this.experiencia = experiencia;

## 📊 Exemplo de Saída no Console

###### Empresa: TechCorp
###### Cargo: Front-End Júnior
###### Compatibilidade: 75.00% - Média compatibilidade
###### Habilidades faltantes: React
###### ---------------------------------------------------
###### Henrique, a vaga mais compatível é na TechCorp
###### Sugestão de estudo: React