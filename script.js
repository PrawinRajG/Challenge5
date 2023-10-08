const resultInput = document.getElementById("result");

function appendToResult(value) {
    resultInput.value += value;
}

function clearResult() {
    resultInput.value = "";
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = "Error";
    }
}
