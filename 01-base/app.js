const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const resultElement = document.getElementById("result");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const umn = document.getElementById("umn");
const del = document.getElementById("del");
const submit = document.getElementById("submit");
let action = "+";

plus.onclick = function () {
    action = "+";
};

minus.onclick = function () {
    action = "-";
};

umn.onclick = function () {
    action = "*";
};

del.onclick = function () {
    action = "/";
};

function printResult(sum) {
    if (sum < 0) {
        resultElement.style.color = "red";
    } else {
        resultElement.style.color = "blue";
    }
    resultElement.textContent = sum;
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value);
    const num2 = Number(inp2.value);
    if (actionSymbol == "+") {
        return num1 + num2;
    } else if (actionSymbol == "-") {
        return num1 - num2;
    } else if (actionSymbol == "*") {
        return num1 * num2;
    } else {
        return num1 / num2;
    }
}

submit.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action);
    printResult(result);
};
