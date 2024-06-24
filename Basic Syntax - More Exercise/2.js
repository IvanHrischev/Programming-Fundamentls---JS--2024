function getLastDigitName(number) {
    // Превръщаме числото в низ
    let numAsString = number.toString();
    
    // Извличаме последната цифра
    let lastDigitChar = numAsString[numAsString.length - 1];
    
    // Превръщаме последната цифра обратно в число
    let lastDigit = Number(lastDigitChar);
    
    // Променлива за съхранение на името на цифрата
    let digitName = '';
    
    // Определяме името на последната цифра
    switch (lastDigit) {
        case 0:
            digitName = 'zero';
            break;
        case 1:
            digitName = 'one';
            break;
        case 2:
            digitName = 'two';
            break;
        case 3:
            digitName = 'three';
            break;
        case 4:
            digitName = 'four';
            break;
        case 5:
            digitName = 'five';
            break;
        case 6:
            digitName = 'six';
            break;
        case 7:
            digitName = 'seven';
            break;
        case 8:
            digitName = 'eight';
            break;
        case 9:
            digitName = 'nine';
            break;
        default:
            digitName = 'unknown';
    }
    
    
console.log(digitName)

}
getLastDigitName(512)