/*
Brutto zu Netto
nettopreis = Bruttopreis / 1,19

Netto zu Brutto
nettopreis * 1,19
*/

const nettoElement = document.getElementById("netto-value");
const calcBtn = document.getElementById("calc-btn");

calcBtn.addEventListener("click", (event) => {
    event.preventDefault();
    let calcMethod = document.querySelector('input[name="calc-method"]:checked').value;
    let mwst = document.querySelector('input[name="mehrwertsteuersatz"]:checked').value;
    let nettoValue = nettoElement.value;

    if (calcMethod == "with-mwst") {
        nettoToBrutto(nettoValue, mwst);
    } else {
        bruttoTo(nettoValue, mwst);
    }
});

function nettoToBrutto(amount, mwst) {
    let bruttoResult = amount * mwst;
    document.getElementById("result").innerText = `${bruttoResult} €`;
}

function bruttoTo(amount, mwst) {
    let nettoResult = amount / mwst;
    document.getElementById("result").innerText = Math.floor(nettoResult) + " €";
}

function setDisplay(method) {
    if (method == "without-mwst") {
        document.getElementById("label-netto").innerText = "Bruttobetrag";
    } else {
        document.getElementById("label-netto").innerText = "Nettobetrag";
    }
}