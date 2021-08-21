function calcular() {


    let aluno1 = document.getElementById('aluno1').value;
    let aluno2 = document.getElementById('aluno2').value;
    let aluno3 = document.getElementById('aluno3').value;
    let aluno4 = document.getElementById('aluno4').value;
    let aluno5 = document.getElementById('aluno5').value;


    let total = Number(aluno1) + Number(aluno2) + Number(aluno3) + Number(aluno4) + Number(aluno5);

    let media = total / 5;

    document.getElementById('res').innerHTML = "A média é: " + media;

}