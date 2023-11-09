var year = 27;

if (year < 0 || isNaN(year)) {
    console.log("Будь ласка, введіть додатнє число");
} else {
    year = parseInt(year);
    var lastDigit = year % 10;
    var lastTwoDigits = year % 100;

    var word = (lastTwoDigits >= 11 && lastTwoDigits <= 14) ? "років" :
               (lastDigit === 1) ? "рік" :
               (lastDigit >= 2 && lastDigit <= 4) ? "роки" : "років";

    console.log(year + " " + word);
}