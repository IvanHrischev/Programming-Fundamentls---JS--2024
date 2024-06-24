function solve(input) {
    let username = input[0];
    let reversedUsername = '';
    
    // Обръщане на стринга ръчно
    for (let i = username.length - 1; i >= 0; i--) {
        reversedUsername += username[i];
    }

    let attemptCount = 0;

    for (let i = 1; i < input.length; i++) {
        let attempt = input[i];
        attemptCount++;
        if (attempt === reversedUsername) {
            console.log(`User ${username} logged in.`);
            return;
        } else {
            if (attemptCount === 4) {
                console.log(`User ${username} blocked!`);
                return;
            } else {
                console.log('Incorrect password. Try again.');
            }
        }
    }
}
solve(['Acer','login','go','let me in','recA'])