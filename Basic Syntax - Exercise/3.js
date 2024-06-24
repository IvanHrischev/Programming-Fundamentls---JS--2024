function division(number) {
    let maxDivisible = Number.MIN_SAFE_INTEGER

    for (let currentDivisible = 2; currentDivisible <= 10; currentDivisible++) {
        if (currentDivisible == 4 || currentDivisible == 5 || currentDivisible == 8 || currentDivisible == 9) {
            continue;
        } else {
            // console.log(currentDivisible) получавам числата 2,3,6,7,10
            if (number % currentDivisible == 0) {

                maxDivisible = currentDivisible

            } else {


            }
        }
    }
    if (number % maxDivisible == 0) {
        console.log(`The number is divisible by ${maxDivisible}`)
    } else {
        console.log(`Not divisible`)
    }






}
division(1643)