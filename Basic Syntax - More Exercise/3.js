function nextDay(year, month, day) {
    let totalDaysInMonth;

    // Външният цикъл е за текущата година
    for (let currentYear = year; currentYear < 2100; currentYear++) {

        // Средният цикъл е за текущия месец
        for (let currentMonth = month; currentMonth <= 12; currentMonth++) {

            // Определяне на броя дни в текущия месец
            if (currentMonth === 2) {
                // Проверка за високосна година
                if ((currentYear % 4 === 0 && currentYear % 100 !== 0) || (currentYear % 400 === 0)) {
                    totalDaysInMonth = 29;
                } else {
                    totalDaysInMonth = 28;
                }
            } else if (currentMonth === 4 || currentMonth === 6 || currentMonth === 9 || currentMonth === 11) {
                totalDaysInMonth = 30;
            } else {
                totalDaysInMonth = 31;
            }

            // Вътрешният цикъл е за текущия ден
            for (let currentDay = day; currentDay <= totalDaysInMonth; currentDay++) {
                let nextDay = currentDay + 1;
                if (nextDay > totalDaysInMonth) {
                    nextDay = 1;
                    if (currentMonth === 12) {
                        currentMonth = 1;
                        currentYear += 1;
                    } else {
                        currentMonth += 1;
                    }
                    console.log(`${currentYear}-${currentMonth}-${nextDay}`);
                    return;
                } else {
                    console.log(`${currentYear}-${currentMonth}-${nextDay}`);
                    return;
                }
            }

            // Рестартиране на дните за следващия месец
            day = 1;
        }

        // Рестартиране на месеците за следващата година
        month = 1;
    }
}
// nextDay(2016, 9, 30)
nextDay(2020, 3, 24)
