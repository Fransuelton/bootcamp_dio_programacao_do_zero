const nomeDoHeroi = 'Morgot';

const experienciaDoHeroi = 1000;

let nivelDoHeroi;

if (experienciaDoHeroi <= 1000) {
    nivelDoHeroi = 'Ferro';
} else if (experienciaDoHeroi <= 2000) {
    nivelDoHeroi = 'Bronze';
} else if (experienciaDoHeroi <= 5000) {
    nivelDoHeroi = 'Prata';
} else if (experienciaDoHeroi <= 7000) {
    nivelDoHeroi = 'Ouro';
} else if (experienciaDoHeroi <= 8000) {
    nivelDoHeroi = 'Platina';
} else if (experienciaDoHeroi <= 9000) {
    nivelDoHeroi = 'Imortal';
} else if (experienciaDoHeroi > 10000) {
    nivelDoHeroi = 'Radiante';
}

if (nivelDoHeroi) {
    console.log(`O Herói de nome ${nomeDoHeroi} está no nível de ${nivelDoHeroi}`);
}
