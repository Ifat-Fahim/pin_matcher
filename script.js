// Generating random numbers in the input box
const generateButton = document.getElementsByClassName("generate-btn")[0];
const randomNumberOutput = document.getElementById("random-output");
generateButton.addEventListener("click", function () {
    const verificationCode = randomRange(1000, 9999);
    randomNumberOutput.value = verificationCode;
});
function randomRange(minNum, maxNum) {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    return randomNumber;
}

//Working with the number pad
const pinInput = document.getElementById("pin-input");
const numberKeys = document.querySelectorAll(".button");
for (let i = 0; i < numberKeys.length; i++) {
    const numbers = numberKeys[i];
    numbers.addEventListener("click", function (event) {
        const number = event.target.innerText;
        if (number == "C") {
            pinInput.value = "";
        } else if (number == "<") {
            pinInput.value = pinInput.value.slice(0, pinInput.value.length - 1);
        } else {
            pinInput.value += number;
        }
    });
}

// verying userInput
const submitButton = document.getElementsByClassName("submit-btn")[0];
const failedMessage = document.getElementById("failed");
const successMessage = document.getElementById("success");
submitButton.addEventListener("click", function () {
    const generatedCode = randomNumberOutput.value;
    const userInput = pinInput.value;
    if (generatedCode == userInput) {
        successMessage.style.display = "block";
    } else {
        failedMessage.style.display = "block";
    }
});
