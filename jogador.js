// Função para calcular o saldo e o nível do jogador
function calcularNivelJogador(vitorias, derrotas) {
    // Calcula o saldo de vitórias (vitórias - derrotas)
    const saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determina o nível do jogador com base na quantidade de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else if (vitorias >= 101) {
        nivel = "Imortal";
    }

    // Retorna o saldo e o nível em uma mensagem formatada
    return `O Herói tem de saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Exemplo de uso da função
const vitorias = 45;     // Quantidade de vitórias do jogador
const derrotas = 20;     // Quantidade de derrotas do jogador

// Chama a função e exibe o resultado
const resultado = calcularNivelJogador(vitorias, derrotas);
console.log(resultado);
