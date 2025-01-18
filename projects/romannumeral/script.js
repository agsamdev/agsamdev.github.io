// Get DOM elements
const numberInput = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

let result = '';
const valueSymbols = [
    { value: 1000, symbol: "M" },
    { value: 900, symbol: "CM" },
    { value: 500, symbol: "D" },
    { value: 400, symbol: "CD" },
    { value: 100, symbol: "C" },
    { value: 90, symbol: "XC" },
    { value: 50, symbol: "L" },
    { value: 40, symbol: "XL" },
    { value: 10, symbol: "X" },
    { value: 9, symbol: "IX" },
    { value: 5, symbol: "V" },
    { value: 4, symbol: "IV" },
    { value: 1, symbol: "I" },
  ];

const convertToRoman = (num) => {
valueSymbols.forEach((symbol) => {
while(num >= symbol.value) {
result += symbol.symbol;
num -= symbol.value;
}
})
return result;
}
const outputResult = () => {
    const number = parseInt(numberInput.value);
    if (isNaN(number)) {
        output.innerText = 'Please enter a valid number.';
    }else if(number < 0){
        output.innerText = 'Please enter a number greater than or equal to 1.';
    }else if(number > 3999){
        output.innerText = 'Please enter a number less than or equal to 3999.';
    } else {
        output.innerText = `${convertToRoman(number)}`;
        result = '';
    }
}

convertBtn.addEventListener('click', () => {
   outputResult();
});


numberInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        outputResult();
    }
  });
