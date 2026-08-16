const campo = document.getElementById('campo');
const contador = document.getElementById('contador');

campo.addEventListener('input', () => {
    const cantidad = campo.value.length;
    contador.textContent = `${cantidad} caracter${cantidad === 1 ? '' : 'es'}`;
});