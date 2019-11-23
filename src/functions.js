const math = {
  add: (num1, num2) => num1 + num2,
  subtract: (num1, num2) => num1 - num2,
  divide: (num1, num2) => num1 / num2,
  multiply: (num1, num2) => num1 * num2
};

export const calculate = string => {
  let array = string.split(" ");
  while (array.includes("x")) {
    for (let i = 0; i < array.length; i++) {
      const val = array[i];
      if (val === "x") {
        const num1 = parseInt(array[i - 1]);
        const num2 = parseInt(array[i + 1]);
        const result = math.multiply(num1, num2).toString();
        array.splice(i - 1, 3, result);
      }
    }
  }
  while (array.includes("/")) {
    for (let i = 0; i < array.length; i++) {
      const val = array[i];
      if (val === "/") {
        const num1 = parseInt(array[i - 1]);
        const num2 = parseInt(array[i + 1]);
        const result = math.divide(num1, num2).toString();
        array.splice(i - 1, 3, result);
      }
    }
  }

  while (array.includes("+")) {
    for (let i = 0; i < array.length; i++) {
      const val = array[i];
      if (val === "+") {
        const num1 = parseInt(array[i - 1]);
        const num2 = parseInt(array[i + 1]);
        const result = math.add(num1, num2).toString();
        array.splice(i - 1, 3, result);
      }
    }
  }

  while (array.includes("-")) {
    for (let i = 0; i < array.length; i++) {
      const val = array[i];
      if (val === "-") {
        const num1 = parseInt(array[i - 1]);
        const num2 = parseInt(array[i + 1]);
        const result = math.subtract(num1, num2).toString();
        array.splice(i - 1, 3, result);
      }
    }
  }
  return array[0];
};
