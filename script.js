// Kilometer ↔ Meter
function convertKmToM() {
    const km = document.getElementById('kmInput').value;
    document.getElementById('mInput').value = km ? (km * 1000) : '';
}
function convertMToKm() {
    const m = document.getElementById('mInput').value;
    document.getElementById('kmInput').value = m ? (m / 1000) : '';
}

// Kilogram ↔ Gram
function convertKgToG() {
    const kg = document.getElementById('kgInput').value;
    document.getElementById('gInput').value = kg ? (kg * 1000) : '';
}
function convertGToKg() {
    const g = document.getElementById('gInput').value;
    document.getElementById('kgInput').value = g ? (g / 1000) : '';
}

// Celsius ↔ Fahrenheit
function convertCToF() {
    const c = document.getElementById('cInput').value;
    document.getElementById('fInput').value = c ? ((c * 9/5) + 32).toFixed(2) : '';
}
function convertFToC() {
    const f = document.getElementById('fInput').value;
    document.getElementById('cInput').value = f ? ((f - 32) * 5/9).toFixed(2) : '';
}
