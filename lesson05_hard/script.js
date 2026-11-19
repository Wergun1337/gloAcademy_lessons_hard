// 1
const numbersArr = ["24", "35", "567", "43", "244", "54", "404"];

const sortStart2or4 = function () {
    numbersArr.forEach(function (number) {
        if (number.startsWith("2") || number.startsWith("4")) {
            console.log(number);
        }
    })
}

sortStart2or4();

// 2

const number = 100;

const simpleNumbers = function () {
    for (let i = 1; i <= number; i++) {
        let isSimple = true;

        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                isSimple = false;
                break;
            }
        }

        if (isSimple) {
            console.log(`число ${i}. Делители: 1 и ${i}`);
        }
    }
}

simpleNumbers();