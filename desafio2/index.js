// Calculadora de Partidas Rankeadas

function calculateNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas
    let nivel

    if (vitorias < 10) {
        nivel = "Ferro"
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze"
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata"
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro"
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante"
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Leandario"
    } else if (vitorias >= 101) {
        nivel = "Imortal"
    }

    return `O Heroi tem um saldo de ${saldoVitorias} e esta no Nivel de ${nivel}`

}
//saida
console.log(calculateNivel(85, 20))
console.log(calculateNivel(130, 40))
