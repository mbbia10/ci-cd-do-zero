const soma = require("./app");

if (soma(2, 2) !== 4) {
  throw new Error("Teste falhou ❌");
}

console.log("Teste passou ✅");
