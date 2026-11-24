// ==========================================
// MICRO-PASSOS
// ==========================================
let meuNome = "Ana";
let minhaIdade = 16;
let minhaCidade = "Sapucaia do Sul";

console.log(`Micro-passo 2: Olá, chamo-me ${meuNome}, tenho ${minhaIdade} anos e vivo em ${minhaCidade}.`);

minhaIdade = 17;
console.log(`Micro-passo 3: Nova idade -> ${minhaIdade}`);

const escola = "SENAI";
console.log("Micro-passo 4: Alterar uma const gera erro de atribuição (Assignment to constant variable).");
// escola = "Outra"; // Descomenta esta linha para ver o erro na consola.


// ==========================================
// NÍVEL 1 — Aquecimento (sem código)
// ==========================================

// 1. Nomes válidos segundo as regras da aula:
// - nota1: válido
// - 2nota: inválido (começa com número)
// - nome completo: inválido (tem espaço)
// - nomeCompleto: válido (padrão camelCase, sem espaços nem acentos)
// - idade_aluno: válido (sem espaços nem acentos; camelCase é o padrão sugerido)
// - precoFinal: válido (padrão camelCase)
console.log("Nível 1.1: Válidos -> nota1, nomeCompleto, precoFinal (e idade_aluno sem espaços/acentos).");

// 2. Tipos de dados:
// '42' -> string
// 42 -> number
// true -> boolean
// 'false' -> string
// 3.14 -> number
// let x; (valor de x) -> undefined
console.log("Nível 1.2:", typeof "42", typeof 42, typeof true, typeof "false", typeof 3.14, typeof undefined);

// 3. let ou const:
// (a) pontos de um jogo -> let
// (b) quantidade de dias da semana -> const
// (c) saldo do cartão do autocarro -> let
// (d) valor de PI (3.14) -> const
console.log("Nível 1.3: (a) let, (b) const, (c) let, (d) const.");


// ==========================================
// NÍVEL 2 — Adivinhe o resultado
// ==========================================

// 4. O que aparece na Console?
let a4 = "10";
let b4 = 5;
console.log("Nível 2.4 - a + b:", a4 + b4);                // "105"
console.log("Nível 2.4 - Number(a) + b:", Number(a4) + b4); // 15
console.log("Nível 2.4 - typeof a:", typeof a4);          // "string"

// 5. Dois erros corrigidos:
// Erro 1: 'nota' estava com const e tentava mudar para 8 -> trocado para let.
// Erro 2: variável declarada como 'Nome' e chamada como 'nome' -> unificado para 'nome'.
let nota = 7;
nota = 8;
let nome = "Ana";
console.log("Nível 2.5 - Corrigido:", nota, nome);

// 6. O que aparece na Consola?
let resposta;
console.log("Nível 2.6 - resposta:", resposta);                  // undefined
console.log("Nível 2.6 - typeof resposta:", typeof resposta);    // "undefined"
resposta = "sim";
console.log("Nível 2.6 - novo typeof resposta:", typeof resposta); // "string"


// ==========================================
// NÍVEL 3 — Mão no código
// ==========================================

// 7. Cartão de apresentação
const nomeCartao = "Ana";
let idadeCartao = 16;
let cidadeCartao = "Sapucaia do Sul";
const cursoCartao = "Desenvolvimento de Sistemas";
console.log(`Eu sou ${nomeCartao}, tenho ${idadeCartao} anos, moro em ${cidadeCartao} e estudo ${cursoCartao}.`);

// 8. Troca de potes
let a = 1;
let b = 2;
let poteAuxiliar = a;
a = b;
b = poteAuxiliar;
console.log(`Nível 3.8 - a = ${a}, b = ${b}`);

// 9. Conversor de temperatura (°C para °F)
let celsius = Number(prompt("Exercício 9: Digite a temperatura em °C:"));
let fahrenheit = celsius * 1.8 + 32;
console.log(`Exercício 9: ${celsius}°C = ${fahrenheit}°F`);

// 10. Média do trimestre
let nota1 = Number(prompt("Exercício 10: Digite a primeira nota:"));
let nota2 = Number(prompt("Exercício 10: Digite a segunda nota:"));
let nota3 = Number(prompt("Exercício 10: Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
console.log(`Exercício 10: Média = ${media}`);

// 11. Rachando a pizza
let totalConta = Number(prompt("Exercício 11: Digite o valor total da conta:"));
let amigos = Number(prompt("Exercício 11: Digite a quantidade de amigos:"));
let porPessoa = totalConta / amigos;
console.log(`Exercício 11: Cada amigo paga ${porPessoa.toFixed(2)}`);


// ==========================================
// DESAFIO
// ==========================================

// 12. Relógio de minutos
let minutosInformados = Number(prompt("Desafio 12: Digite a quantidade de minutos:"));
let horas = Math.floor(minutosInformados / 60);
let minutosRestantes = minutosInformados % 60;
console.log(`Desafio 12: ${horas}h ${minutosRestantes}min`);


// ==========================================
// PERGUNTA PARA FIXAR
// ==========================================
// let cria uma variável cujo conteúdo pode ser alterado depois;
// const cria uma variável fixa (não pode receber outro valor após criada).
console.log("Pergunta para fixar: let pode alterar o valor; const não pode ser reatribuída.");