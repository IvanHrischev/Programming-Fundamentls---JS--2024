function sortNumbers(num1, num2, num3) {
    let maxNum, avgNum, minNum;

    // Намираме най-голямото число
    if (num1 >= num2 && num1 >= num3) {
        maxNum = num1;
    } else if (num2 >= num1 && num2 >= num3) {
        maxNum = num2;
    } else {
        maxNum = num3;
    }

    // Намираме най-малкото число
    if (num1 <= num2 && num1 <= num3) {
        minNum = num1;
    } else if (num2 <= num1 && num2 <= num3) {
        minNum = num2;
    } else {
        minNum = num3;
    }

    // Намираме средното число
    if ((num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)) {
        avgNum = num1;
    } else if ((num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)) {
        avgNum = num2;
    } else {
        avgNum = num3;
    }

    // Отпечатваме числата в низходящ ред
    console.log(maxNum);
    console.log(avgNum);
    console.log(minNum);
}
sortNumbers(2, 0, 0)