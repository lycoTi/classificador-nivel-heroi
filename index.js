let nome = "Luffy"
let xp = 5200
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

for (i = 0; i < nivel.length; i++) {
    if (xp < 1000 && nivel[i] == "Ferro") {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[i]}`)
    } else if (xp > 1000 && xp < 2000 && nivel[i] == "Bronze") {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[i]}`)
    } else if (xp > 2000 && xp < 3000 && nivel[i] == "Prata") {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[i]}`)
    } else if (xp > 3000 && xp < 4000 && nivel[i] == "Ouro") {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[i]}`)
    } else if (xp > 4000 && xp < 5000 && nivel[i] == "Platina") {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[i]}`)
    }
    else if (xp > 5000 && xp < 6000 && nivel[i] == "Ascendente") {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[i]}`)
    }
    else if (xp > 6000 && xp < 7000 && nivel[i] == "Imortal") {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[i]}`)
    }
    else if (xp > 7000 && nivel[i] == "Radiante") {
        console.log(`O Herói de nome ${nome} está no nível de ${nivel[i]}`)
    }
}
