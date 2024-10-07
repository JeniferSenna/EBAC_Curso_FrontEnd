const formNumbers = document.getElementById("formNumbers");

formNumbers.addEventListener("submit", function(event){
    event.preventDefault(); // para impedir o envio automático do formulário e o recarregamento da página
    validaForm();
});

function validaForm() {
    const campoA = document.getElementById("campo_A").value;
    const campoB = document.getElementById("campo_B").value;    


if (Number(campoB) > Number(campoA)) {
    document.getElementById("allRight").style.display = 'block';
    document.getElementById("tryAgain").style.display = 'none';
}
else {
    document.getElementById("tryAgain").style.display = 'block';
    document.getElementById("allRight").style.display = 'none';
}

}
