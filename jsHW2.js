var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
};


services['Розбити скло'] = "200 грн";


services.price = function () {
    const numericValues = Object.values(this)
        .filter(value => !isNaN(parseInt(value)));

    return numericValues.length > 0 ? numericValues.reduce((total, value) => total + parseInt(value), 0) + ' грн' : 'Немає числових значень';
};

services.minPrice = function () {
    const numericValues = Object.values(this)
        .filter(value => !isNaN(parseInt(value)))
        .map(value => parseInt(value));

    return numericValues.length > 0 ? Math.min(...numericValues) + ' грн' : 'Немає числових значень';
};

services.maxPrice = function () {
    const numericValues = Object.values(this)
        .filter(value => !isNaN(parseInt(value)))
        .map(value => parseInt(value));

    return numericValues.length > 0 ? Math.max(...numericValues) + ' грн' : 'Немає числових значень';
};


console.log("Загальна вартість послуг: " + services.price());
console.log("Мінімальна ціна: " + services.minPrice());
console.log("Максимальна ціна: " + services.maxPrice());