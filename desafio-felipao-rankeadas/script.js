nivelDeRank(20,10)

function nivelDeRank(vitorias,derrotas) {
    var resultado = vitorias - derrotas;

    let rank = '';

    if (resultado < 10) {
        rank = 'Ferro'
    } else if (resultado >= 11 || resultado <= 20) {
        rank = 'Bronze'
    } else if (resultado >= 21 || resultado <= 50) {
        rank = 'Prata'
    } else if (resultado >= 51 || resultado <= 80) {
        rank = 'Ouro'
    } else if (resultado >= 81 || resultado <= 90) {
        rank = 'Diamante'
    } else if (resultado >= 91 || resultado <= 100) {
        rank = 'Bronze'
    } else {
        rank = 'Imortal'
    }

    return console.log(`Com ${vitorias} vitórias e ${derrotas} derrotas você está no rank ${rank}`);
}



