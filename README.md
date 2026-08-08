# Repositório do mini projeto do curso de Front end React - SCTEC

## SkillMatch JS: Simulador de Compatibilidade com Vaga Front-End Júnior
![This is an alt text.]("C:\Users\henri\Downloads\Copilot_20260807_230134.png" "Fluxo do programa")

### O objetivo do projeto é criar um sistema simples que compare as habilidades de uma pessoa candidata com os requisitos de algumas vagas fictícias de front-end júnior.
### _________________________________________________________________________________________
### A aplicação analisa: 
### ● quais habilidades o candidato possui? 
### ● quais habilidades cada vaga exige?
### ● quais habilidades estão faltando?
### ● qual é o percentual de compatibilidade com cada vaga? 
### ● qual vaga possui maior compatibilidade?
### ● qual recomendação de estudo deve ser dada ao candidato.

### Explicação do código:

### Regras de Negócio e Critérios
### - Cálculo de Compatibilidade
### A regra de cálculo é consistente para todas as vagas e baseia-se na proporção de habilidades dominadas pelo candidato em relação aos requisitos totais da vaga:

### Fórmula: (Requisitos Correspondentes / Total de Requisitos da Vaga) * 100
### const percentual = (habilidadesComuns.length / this.requisitos.length) * 100
### O resultado gera um percentual de 0 a 100%.


### Estratégia de Maior Aderência
A estratégia utilizada analisa o array de resultados através do método .reduce(). O sistema compara os percentuais obtidos e retorna o objeto da vaga que possuir o maior valor numérico de compatibilidade.

- Critério de Recomendação de Estudo
O critério adota uma abordagem de prioridade técnica. Caso o candidato possua habilidades faltantes na vaga de maior aderência, o sistema filtra e exibe explicitamente quais tecnologias ele precisa estudar imediatamente para atingir 100% de alinhamento com aquela empresa.

👤 Autor
Desenvolvido por Henrique — Projeto prático de avaliação em JavaScript.