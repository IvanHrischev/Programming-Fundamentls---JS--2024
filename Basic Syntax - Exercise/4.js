function vacation(countPeople, type, dayOfWeek) {
    let pricePerPerson = 0;

    switch (dayOfWeek) {
        case "Friday":
            if (type === "Students") {
                pricePerPerson = 8.45;
            } else if (type === "Business") {
                pricePerPerson = 10.90;
            } else if (type === "Regular") {
                pricePerPerson = 15;
            }
            break;
        case "Saturday":
            if (type === "Students") {
                pricePerPerson = 9.80;
            } else if (type === "Business") {
                pricePerPerson = 15.60;
            } else if (type === "Regular") {
                pricePerPerson = 20;
            }
            break;
        case "Sunday":
            if (type === "Students") {
                pricePerPerson = 10.46;
            } else if (type === "Business") {
                pricePerPerson = 16;
            } else if (type === "Regular") {
                pricePerPerson = 22.50;
            }
            break;
    }

    if (type === "Business" && countPeople >= 100) {
        countPeople -= 10;
    }

    let totalPrice = countPeople * pricePerPerson;

    if (type === "Students" && countPeople >= 30) {
        totalPrice *= 0.85;
    } else if (type === "Regular" && countPeople >= 10 && countPeople <= 20) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
// vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")