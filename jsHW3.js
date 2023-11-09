var unit = "кілометри";
var quantity = 7;

//var unit = "години";
//var quantity = 8;

//var unit = "кілограми";
//var quantity = 5;

switch (unit) 
    {   case "кілометри":
        console.log(quantity + " км це " + quantity * 1000 + " м");
        break;

        case "години":
        console.log(quantity + " год це " + quantity * 60 + " хв");
        break;

        case "кілограми":
        console.log(quantity + " кг це " + quantity * 1000 + " грм");
        break;

        default:
        console.log("Вибачте, але я не можу перевести цю одиницю виміру");
    }