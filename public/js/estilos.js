let estilos = {};

$.ajax({
    type: "GET",
    url: '/api/estilos',
    success: function(data) {
        estilos = data;
    }
});

function calcularEstilo() {
    let ec = parseInt(document.getElementById('c1').value) + parseInt(document.getElementById('c5').value) + parseInt(document.getElementById('c9').value) + parseInt(document.getElementById('c13').value) + parseInt(document.getElementById('c17').value) + parseInt(document.getElementById('c21').value) + parseInt(document.getElementById('c25').value) + parseInt(document.getElementById('c29').value) + parseInt(document.getElementById('c33').value);
    let ca = parseInt(document.getElementById('c3').value) + parseInt(document.getElementById('c7').value) + parseInt(document.getElementById('c11').value) + parseInt(document.getElementById('c15').value) + parseInt(document.getElementById('c19').value) + parseInt(document.getElementById('c23').value) + parseInt(document.getElementById('c27').value) + parseInt(document.getElementById('c31').value) + parseInt(document.getElementById('c35').value);
    let ea = parseInt(document.getElementById('c4').value) + parseInt(document.getElementById('c8').value) + parseInt(document.getElementById('c12').value) + parseInt(document.getElementById('c16').value) + parseInt(document.getElementById('c20').value) + parseInt(document.getElementById('c24').value) + parseInt(document.getElementById('c28').value) + parseInt(document.getElementById('c32').value) + parseInt(document.getElementById('c36').value);
    let or = parseInt(document.getElementById('c2').value) + parseInt(document.getElementById('c6').value) + parseInt(document.getElementById('c10').value) + parseInt(document.getElementById('c14').value) + parseInt(document.getElementById('c18').value) + parseInt(document.getElementById('c22').value) + parseInt(document.getElementById('c26').value) + parseInt(document.getElementById('c30').value) + parseInt(document.getElementById('c34').value);

    let estilo = euclides(ca, ec, ea, or);

    document.getElementById('estiloFinal').innerHTML = estilo;
}

function euclides(ca, ec, ea, or) {
    let minimo = 9999;
    let resultado = "";

    let respuestas = [ca, ec, ea, or];

    estilos.forEach(function(actual) {
        let valor = 0;

        actual = Object.values(actual);

        for (i = 0; i < respuestas.length; i++) {
            valor = Math.pow((respuestas[i] - actual[i]), 2);
        }

        valor = Math.sqrt(valor)

        if (minimo === 0) {
            return actual[4];
        } else {
            if (minimo > valor) {
                minimo = valor;
                resultado = actual[4];
            }
        }
    });

    return resultado;
}