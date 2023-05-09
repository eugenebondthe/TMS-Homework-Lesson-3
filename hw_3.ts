import { question } from "readline-sync";

//Task 1

let x = 20;
let y = 58;
let z = 42;

console.log(x + y + z);

//Task 2

const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

const myAgeInSeconds =
  33 * daysInYear * hoursInDay * minutesInHour * secondsInMinute;
console.log(myAgeInSeconds);

//Task 3

let count = 42;
let userName = "42";

//1st variant

const convertCount = count.toString();
const convertUserName = Number(userName);

console.log(typeof convertCount, typeof convertUserName);

//2nd variant

const reConvertCount = `${count}`;
const reConvertUserName = parseInt(userName);

console.log(typeof reConvertCount, typeof reConvertUserName);

//Task 4

let a = 1;
let b = 2;
let c = "белых медведей";

console.log(`${a}${b} ${c}`);

//Task 5

const one = "доступ";
const two = "морпех";
const three = "наледь";
const four = "попрек";
const five = "рубило";

const sum = one + two + three + four + five;
console.log(sum.length);

//Task 6

const uno = 1;
const deus = "two";
const tres = true;

console.log(`Variable Uno have value: ${uno} and have type: ${typeof deus}`);
console.log(`Variable Deus have value: ${deus} and have type: ${typeof deus}`);
console.log(`Variable Tres have value: ${tres} and have type: ${typeof tres}`);

//Task 7

const text = "true";
const bool = false;
const num = 17;
const none = undefined;
const zero = null;

console.log(
  `${typeof text}, ${typeof bool}, ${typeof num}, ${typeof none}, ${typeof zero}`
);

//Task 8

let height = 15;
let width = 20;

console.log(height > width ? height : width);

//Task 9

for (let i = 0; i <= 20; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

//Task 10

const key = true;
const documents = true;
const pen = true;
const apple = false;
const orange = true;

let finalDecision;

if (key && documents && pen && (apple || orange)) {
  finalDecision = "Идем на работу";
} else {
  finalDecision = "Возвращаемся домой";
}

console.log(finalDecision);

//Task 11

const numInput: string = question("Enter your number:\n");

if (Number(numInput) % 3 === 0 && Number(numInput) % 5 === 0) {
  console.log("FizBuz");
} else if (Number(numInput) % 3 === 0) {
  console.log("Buz");
} else if (Number(numInput) % 5 === 0) {
  console.log("Fiz");
} else {
  console.log("U found an issue call GhostBusters");
}

//Task 12

const ageInput: string = question("Укажи свой возраст:\n");

if (Number(ageInput) >= 18) {
  console.log("Попей пивка");
} else if (Number(ageInput) >= 16 && Number(ageInput) < 18) {
  console.log("Можешь выкурить сигаретку, только маме не говори");
} else if (Number(ageInput) < 16) {
  console.log("Пей колу");
} else {
  console.log("Ошибка ввода!");
}

//Task 13

const directionInput: string = question("Путник, укажи сторону света:\n");

switch (directionInput) {
  case "юг":
    console.log("На юг пойдешь счастье найдешь!");
    break;
  case "север":
    console.log("На север пойдешь много денег найдешь!");
    break;
  case "запад":
    console.log("На запад пойдешь верного друга найдешь!");
    break;
  case "восток":
    console.log("на восток пойдешь разработчиком станешь");
    break;
  default:
    console.log("Ошибка ввода, пиши на русском и маленькими буквами!");
}

//Advanced task 1

let first = 4;
let second = 3;

console.log(first, second);

[first, second] = [second, first];

console.log(first, second);

//Advanced task 2

function main(): void {
  const userNumInput: string = question("Введи число:\n");
  const firstOperation: string = question("Сколько отнять от него?\n");
  const secondOperation: string = question("Сколько прибавить к результату?\n");
  const thirdOperation: string = question(
    "На сколько умножить предыдущий результат?\n"
  );
  const fourthOperation: string = question(
    "На сколько разделить предыдущий результат?\n"
  );

  const validInput: boolean =
    isNumber(userNumInput) &&
    isNumber(firstOperation) &&
    isNumber(secondOperation) &&
    isNumber(thirdOperation) &&
    isNumber(fourthOperation);

  if (validInput) {
    const result =
      ((parseInt(userNumInput) -
        parseInt(firstOperation) +
        parseInt(secondOperation)) *
        parseInt(thirdOperation)) /
      parseInt(fourthOperation);
    console.log(
      `(((${userNumInput} - ${firstOperation}) + ${secondOperation}) * ${thirdOperation}) / ${fourthOperation} = ${result}`
    );
  } else {
    console.log("\nОшибка ввода, попбробуй еще раз:\n");
    main();
  }

  function isNumber(str: string): boolean {
    const maybeNum = parseInt(str);
    const isNum: boolean = !isNaN(maybeNum);
    return isNum;
  }
}

main();

//Advanced task 3

const drawingSymbol: string = question("Input a drawing symbol:\n");
const maxStrLength: number = parseInt(question("Input a maximum of symbols in one line:\n"));

let outputResult = '';

for(let i = 1; i <= maxStrLength; i++){
    for(let a = 0; a < i; a++){
        outputResult += drawingSymbol; }
    outputResult += '\n';
}

console.log(outputResult);