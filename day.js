// Returns the day of the week for a given date.
function dayName(date) { //Function name dayName and attr name date, { what it will do}
    const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", //const array with weekdays, reach pos
                           "Thursday", "Friday", "Saturday" ];
    return daysOfTheWeek[date.getDay()]; // returns back, const sets index nr date is var input,
    // getDay() method that get index number for date(no attr todays date.)
}