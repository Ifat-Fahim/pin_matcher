// Generating random numbers in the input box
const generateButton = document.getElementsByClassName("generate-btn")[0];
const pinOutput = document.getElementById("pin-output");
generateButton.addEventListener("click", function () {
    const verificationCode = randomRange(1000, 9999);
    pinOutput.value = verificationCode;
    resetEverything();
});
function randomRange(minNum, maxNum) {
    const randomNumber = Math.floor(Math.random() * (maxNum - minNum) + minNum);
    return randomNumber;
}

//Working with the number pad
const pinInput = document.getElementById("pin-input");
const numberKeys = document.querySelectorAll(".button");
for (let i = 0; i < numberKeys.length; i++) {
    const numberKey = numberKeys[i];
    numberKey.addEventListener("click", function (event) {
        const numberKey = event.target.innerText;
        if (numberKey == "C") {
            pinInput.value = "";
        } else if (numberKey == "<") {
            pinInput.value = pinInput.value.slice(0, pinInput.value.length - 1);
        } else {
            pinInput.value += numberKey;
        }
    });
}

// verying userInput
const submitButton = document.getElementsByClassName("submit-btn")[0];
const failedMessage = document.getElementById("failed");
const successMessage = document.getElementById("success");
let totalTry = 3;
const tryLeftMessage = document.getElementsByClassName("action-left")[0];
submitButton.addEventListener("click", function () {
    const generatedCode = pinOutput.value;
    const userInput = pinInput.value;
    if (generatedCode !== userInput && totalTry > 0) {
        failedMessage.style.display = "block";
        successMessage.style.display = "none";
        removeUserInput();
        totalTry = totalTry - 1;
        tryLeftMessage.innerText = totalTry + " try left";
    } else if (generatedCode == userInput && userInput != "") {
        successMessage.style.display = "block";
        failedMessage.style.display = "none";
        removeUserInput();
        totalTry = 3;
        tryLeftMessage.innerText = totalTry + " try left";
    }
    if (totalTry == 0) {
        submitButton.classList.add("disabled");
        pinOutput.value = "Pin Expired. Generate New Pin.";
    }
});

// reset everything to initial stage
function resetEverything() {
    pinInput.value = "";
    submitButton.classList.remove("disabled");
    totalTry = 3;
    tryLeftMessage.innerText = 3 + " try left";
    failedMessage.style.display = "none";
    successMessage.style.display = "none";
}

//removing user input after submission
function removeUserInput() {
    pinInput.value = "";
}
