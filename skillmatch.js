// RF09 – Criar uma classe base
// RF10 – Usar herança
// RF11 – Demonstrar uso do this
class Pessoa {
  constructor(nome, area, habilidades, experiencia) {
    this.nome = nome;          // uso do this para acessar atributos
    this.area = area;
    this.habilidades = habilidades;
    this.experiencia = experiencia;
  }
}

// RF10 – Herança: Candidato herda de Pessoa
class Candidato extends Pessoa {
  constructor(nome, area, habilidades, experiencia) {
    super(nome, area, habilidades, experiencia);
  }
}

// RF09 – Classe Vaga
class Vaga {
  constructor(empresa, cargo, requisitos) {
    this.empresa = empresa;
    this.cargo = cargo;
    this.requisitos = requisitos;
  }

  // RF03 – Calcular compatibilidade
  calcularCompatibilidade(candidato) {
    // RF12 – Callback: função passada para filter
    // RF13 – Closure: função acessa variável externa (candidato)
    const habilidadesComuns = this.requisitos.filter(req =>
      candidato.habilidades.includes(req)
    );
    const percentual = (habilidadesComuns.length / this.requisitos.length) * 100;
    return percentual;
  }

  // RF05 – Listar habilidades faltantes
  listarFaltantes(candidato) {
    return this.requisitos.filter(req => !candidato.habilidades.includes(req));
  }
}

// RF04 – Classificar compatibilidade
function classificarCompatibilidade(percentual) {
  if (percentual >= 80) return "Alta compatibilidade";
  else if (percentual >= 50) return "Média compatibilidade";
  else return "Baixa compatibilidade";
}

// RF14 – Promise simulando busca de vagas
function buscarVagas() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        new Vaga("Empresa1", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "React"]),
        new Vaga("Empresa2", "Front-End Júnior", ["HTML", "CSS", "Vue", "Git", ]),
        new Vaga("Empresa3", "Front-End Júnior", ["HTML", "CSS", "JavaScript", "TypeScript"])
      ]);
    }, 1500); // simula tempo de resposta
  });
}

// RF14 – Async/Await para consumir a Promise
async function analisarCandidato(candidato) {
  const vagas = await buscarVagas(); // aguarda Promise

  // RF08 – Usar métodos de array (forEach)
  vagas.forEach(vaga => {
    const percentual = vaga.calcularCompatibilidade(candidato);
    const classificacao = classificarCompatibilidade(percentual);
    const faltantes = vaga.listarFaltantes(candidato);

    console.log(`Empresa: ${vaga.empresa}`);
    console.log(`Cargo: ${vaga.cargo}`);
    console.log(`Compatibilidade: ${percentual.toFixed(2)}% - ${classificacao}`);
    console.log(`Habilidades faltantes: ${faltantes.join(", ") || "Nenhuma"}`);
    console.log("---------------------------------------------------");
  });

  // RF06 – Encontrar a vaga mais compatível (reduce)
  const vagaMaisCompativel = vagas.reduce((melhor, vaga) => {
    return vaga.calcularCompatibilidade(candidato) > melhor.calcularCompatibilidade(candidato) ? vaga : melhor;
  });

console.log(`${candidato.nome}, a vaga mais compatível é na ${vagaMaisCompativel.empresa}`);

  // RF07 – Recomendação de estudo
  const recomendacao = vagaMaisCompativel.listarFaltantes(candidato);
  console.log(`Sugestão de estudo: ${recomendacao.join(", ") || "Já possui todas as habilidades!"}`);
}

// RF01 – Criar perfil do candidato
const candidato = new Candidato("Henrique", "Front-End", ["React", "HTML", "JavaScript"], 1);

// Executar análise
analisarCandidato(candidato);
