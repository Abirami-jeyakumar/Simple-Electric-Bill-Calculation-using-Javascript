function calculate() {
    var unitInput = document.getElementById("unit");
    var resultOutput = document.getElementById("result");
    var unit = parseFloat(unitInput.value); 
    if (isNaN(unit) || unit <= 0) {
        resultOutput.innerHTML = "Please enter a valid number of units";
        return;
    }
    var billAmount;
    if (unit < 500) {
        var perUnitRate = 10; 
        billAmount = unit * perUnitRate;
    } else {
        var perUnitRate = 20; 
        billAmount = unit * perUnitRate;
    }
    resultOutput.innerHTML = "Your EB bill amount is: ₹ " + billAmount.toFixed(2);
}
