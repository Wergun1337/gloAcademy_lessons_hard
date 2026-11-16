const num = 266219;

let numToString = String(num);
let multiple = 1;

for (let i = 0; i < numToString.length; i++) {
    multiple *= Number(numToString[i])
};

let cubeMultiple = multiple ** 3
console.log("Первые 2 символа результата перемножения в 3 степени: " + String(cubeMultiple).substring(0, 2));

