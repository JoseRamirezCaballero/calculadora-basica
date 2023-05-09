const label = document.getElementById('labelOperacion');
const inputResultado = document.getElementById('resultado');
const digito = document.querySelectorAll('button');

digito.forEach((btn) => {
    btn.addEventListener('click', (event) => {
        const valor = event.target.textContent;
        console.log(valor)
        if (valor === 'CE') {
            label.textContent = label.textContent.slice(0, -1);
        } else if (valor === 'DELETE') {
            label.textContent = '';
        } else if (valor === '=') {
            inputResultado.value = eval(label.textContent);
        } else {
            label.textContent += valor;
        }
    });
});