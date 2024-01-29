function convert(unit) {
    let input, pounds, ounces, stones, kilograms, grams;
    if (unit === 'pounds') {
        input = document.getElementById('pounds').value;
        kilograms = input * 0.453592;
        document.getElementById('kilograms').value = kilograms.toFixed(2);
    } else if (unit === 'kilograms') {
        input = document.getElementById('kilograms').value;
        pounds = input / 0.453592;
        document.getElementById('pounds').value = pounds.toFixed(2);
    } else if (unit === 'ounces') {
        input = document.getElementById('ounces').value;
        grams = input * 28.3495;
        document.getElementById('grams').value = grams.toFixed(2);
    } else if (unit === 'grams') {
        input = document.getElementById('grams').value;
        ounces = input / 28.3495;
        document.getElementById('ounces').value = ounces.toFixed(2);
    } else if (unit === 'stones') {
        input = document.getElementById('stones').value;
        pounds = input * 14;
        kilograms = input * 6.35029;
        document.getElementById('pounds').value = pounds.toFixed(2);
        document.getElementById('kilograms').value = kilograms.toFixed(2);
    }
}