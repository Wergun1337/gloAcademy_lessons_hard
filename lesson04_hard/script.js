let userInput = prompt("Введите текст");

const userInputCut = function (promptString) {
    if (typeof (promptString) === "string") {
        let trimmedString = promptString.trim();
        if (trimmedString.length > 30) {
            return trimmedString.slice(0, 30) + "...";
        } else return trimmedString;
    } else {
        console.log("не строка")
        return;
    }
}

console.log(userInputCut(userInput));
