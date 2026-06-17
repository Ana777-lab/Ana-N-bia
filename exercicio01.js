//Exercício 01 — Sistema de Boas-Vindas

console.log("Bem-vindo ao ambiente de desenvolvimento JavaScript!")

//Exercício 02 — Cadastro de Desenvolvedor

const nome = "Adilsom";
let cargo = "Pedreiro";
let tempoExperiencia = "15 anos";

console.log("Nome proficional: " + nome);
console.log("Cargo: " + cargo);
console.log("Tempo de experiência: " + tempoExperiencia);

//Exercício 03 — Cálculo de Bonificação

let totalVendido = 5000;
let bonificacao = totalVendido * 0.10;
let valorTotal = totalVendido + bonificacao;

console.log("Vendas: R$ " + totalVendido);
console.log("Bonificação: R$ " + bonificacao);
console.log("Total: R$ " + valorTotal);

//Exercício 04 — Validação de Acesso

let idade = "23";

if(idade >= 18){
    console.log("Acesso autorizado");
}else if(idade < 18){
    console.log("Acesso negado");
}

//Exercício 05 — Classificação de Chamados

let prioridade = 2;

if(prioridade == 1){
    console.log("Prioridade baixa");
}else if(prioridade == 2){
    console.log("prioridade média");
}else if(prioridade == 3){
    console.log("prioridade alta");
}else{
    console.log("prioridade invalida");
}

//Exercício 06 — Central de Atendimento

let opcao = 3
let setor

switch (opcao){
    case 1: setor = "Financeiro"; break;
    case 2: setor = "Suporte técnico"; break;
    case 3: setor = "Multimídia"; break;
    default: setor = "Opção inválida"; break;
}
console.log(setor);

//Exercício 07 — Monitoramento de Processos

for (let i = 0; i <= 10; i++){
    console.log("Executando tarefa " + i);
}

//Exercício 08 — Relatório de Equipe

let equipe = ['Julia', 'Ana', 'Henrique', 'Gabriel', 'Andressa'];
for (let  i= 0; i < equipe.length; i++){
console.log("Integrante: " + equipe[i]);
}

//Exercício 09 — Dashboard de Vendas

let vendas = [100, 250, 400, 150, 300, 500, 200];

let total = 0;
let menor = vendas[0];
let maior = vendas[0];

for(let vendas of vendas){
    total += vendas;

    if(venda > maior){
        maior = venda;
    }
    if (venda < menor){
        menor = vemda;
    }
}

let media = total/ vendas.length;

console.log("Total:", total);
console.log("Média:", media.toFixed(2));
console.log("Maior venda:", maior);
console.log("Menor venda:", menor);