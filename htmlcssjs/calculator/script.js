const btnvalue = document.querySelectorAll('.btn');
const finalresult = document.querySelector('#final');
let firstNumber = "";
let str = "";
let lastNumber = "";
let num = 0;
let newtext;

btnvalue.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.textContent !== "C" &&
            button.textContent !== "⌫" &&
            button.textContent !== "="
        ) {
            if (finalresult.textContent == 0) {
                finalresult.textContent = button.textContent;
            } else {
                finalresult.textContent += button.textContent;
            }
            if (!isNaN(button.textContent)) {
                if (str === "") {
                    firstNumber += (button.textContent);
                } else {
                    lastNumber += (button.textContent);
                }
            } else {
                str = button.textContent;
                console.log("Immediately after assignment:", str);
            }
            if (str === "+") {
                num = Number(firstNumber) + Number(lastNumber);
            } else if (str === "-") {
                num = Number(firstNumber) - Number(lastNumber);
            } else if (str === "*") {
                num = Number(firstNumber) * Number(lastNumber);
            } else if (str === "/") {
                num = Number(firstNumber) / Number(lastNumber);
            } else if (str === "%") {
                num = Number(firstNumber) % Number(lastNumber);
            }
        }
        if (button.textContent === "=") {
            finalresult.textContent = num;
            num = 0;
            firstNumber = "";
            lastNumber = "";
            str = "";
        } else if (button.textContent === "C") {
            finalresult.textContent = 0;
            num = 0;
            str = ""
            firstNumber = "";
            lastNumber = "";
        } else if (button.textContent === "⌫") {
            newtext = finalresult.textContent.slice(0, -1);
            finalresult.textContent = newtext;
            if (!lastNumber == "") {
                newlastnumber = lastNumber.slice(0, -1);
                lastNumber = newlastnumber;
            } else if (!str == "") {
                newstr = str.slice(0, -1);
                str = newstr;
            } else {
                newfirstnumber = firstNumber.slice(0, -1);
                firstNumber = newfirstnumber;
            }
        }

    });

});
