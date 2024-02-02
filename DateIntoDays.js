// Implementation of Function composition
function getDays(date) {
    return date.convertToDays();
}

// Implementation of Higher-order function
function dateDifference(getDateValue, date1, date2) {
    return getDateValue(date1) - getDateValue(date2);
}

function getDateValue(date) {
    return date.convertToDays();
}

class Date {
    // Implementation of immutability
    constructor(year, month, day) {
        this.Year = year;
        this.Month = month;
        this.Day = day;
    }

    // Implementation of Pure Function
    convertToDays() {
        const daysInYear = 365;
        const daysInMonth = 30;
        return daysInYear * this.Year - (this.Month * daysInMonth + this.Day);
    }
}

const date1 = new Date(2080, 1, 30);
const date2 = new Date(2080, 2, 10);

const finalDayDifference = dateDifference(getDays, date1, date2);

console.log("The number of days between two dates (2080-01-30 and 2080-02-10) is : ");
console.log(finalDayDifference);
