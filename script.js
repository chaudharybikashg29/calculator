const result = document.getElementById("result");
const expression = document.getElementById("expression");

function append(value) {
    result.value += value;
}

function clearDisplay() {
    result.value = "";
    expression.innerText = "";
}

function deleteLast() {
    result.value = result.value.slice(0, -1);
}

function calculate() {

    try {

        expression.innerText = result.value;

        let exp = result.value
            .replace(/÷/g, "/")
            .replace(/×/g, "*");

        result.value = eval(exp);

    } catch {
        result.value = "Error";
    }
}