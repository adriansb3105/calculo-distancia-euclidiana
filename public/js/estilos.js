function calcular() {

    let estilo = "";

    let ec = parseInt(document.getElementById('c1').value) + parseInt(document.getElementById('c5').value) + parseInt(document.getElementById('c13').value) + parseInt(document.getElementById('c17').value) + parseInt(document.getElementById('c21').value) + parseInt(document.getElementById('c25').value) + parseInt(document.getElementById('c29').value) + parseInt(document.getElementById('c33').value);

    let or = parseInt(document.getElementById('c2').value) + parseInt(document.getElementById('c6').value) + parseInt(document.getElementById('c10').value) + parseInt(document.getElementById('c14').value) + parseInt(document.getElementById('c18').value) + parseInt(document.getElementById('c22').value) + parseInt(document.getElementById('c26').value) + parseInt(document.getElementById('c30').value) + parseInt(document.getElementById('c34').value);

    let ca = parseInt(document.getElementById('c3').value) + parseInt(document.getElementById('c7').value) + parseInt(document.getElementById('c11').value) + parseInt(document.getElementById('c15').value) + parseInt(document.getElementById('c19').value) + parseInt(document.getElementById('c23').value) + parseInt(document.getElementById('c27').value) + parseInt(document.getElementById('c31').value) + parseInt(document.getElementById('c35').value);

    let ea = parseInt(document.getElementById('c4').value) + parseInt(document.getElementById('c8').value) + parseInt(document.getElementById('c12').value) + parseInt(document.getElementById('c16').value) + parseInt(document.getElementById('c20').value) + parseInt(document.getElementById('c24').value) + parseInt(document.getElementById('c28').value) + parseInt(document.getElementById('c32').value) + parseInt(document.getElementById('c36').value);



    /*Estilo viejo*/
    let caec = ca - ec;
    let eaor = ea - or;

    if (eaor > 2) {
        if (caec > 2) {
            estilo = "convergente";
        } else {
            estilo = "acomodador";
        }

    } else {
        if (caec > 2) {
            estilo = "asimilador";
        } else {
            estilo = "divergente";
        }
    }
    /*Estilo viejo*/





    document.getElementById('estiloFinal').innerHTML = estilo;
}