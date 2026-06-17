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