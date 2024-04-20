const students = [
    {
        name: "Postado",
        nota1: 10,
        nota2: 8.8,
    },
    {
        name: "Baltazar",
        nota1: 7.4,
        nota2: 4.2,
    },
    {
        name: "Lucrecia",
        nota1: 4,
        nota2: 10,
    },
    {
        name: "Germana",
        nota1: 10,
        nota2: 9.8,
    },
]

function results(nota1, nota2) {
    return ((nota1 + nota2) / 2).toFixed(2)
}


for(let student of students) {
    let final = results(student.nota1, student.nota2)
    
    if (final >= 7) {
        alert(`Parabéns ${student.name}, sua média final é de ${final}. Você está aprovado!`)
    }
    else {
        alert(`Que pena ${student.name}, sua média final é de ${final}. Você está reprovado.`)
    }
}