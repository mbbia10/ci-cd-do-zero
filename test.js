import { soma, subtrai } from "./app.js";


import PromptSync from "prompt-sync";
const prompt = PromptSync();


const numero1 = parseFloat(prompt("Digite o primeiro número: "));
const numero2 = parseFloat(prompt("Digite o segundo número: "));

const resultado_soma = soma(numero1, numero2);
const resultado_subtrai = subtrai(numero1, numero2);

console.log(`Soma de ${numero1} + ${numero2} = ${resultado_soma}`);
console.log(`Subtração de ${numero1} - ${numero2} = ${resultado_subtrai}`);

