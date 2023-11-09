//'number' + 3 + 3
    var result = 'number' + 3 + 3;
    console.log(result);
        /* Результат: "number33"
        1. "number" + 3 = "number3"
        2. "number3" + 3 = "number33"*/

//null + 3
    var result1 = null + 3;
    console.log(result1);
        /* Результат: 3
         null при обчисленні вважається 0
         0 + 3 = 3*/

//5 && "qwerty"
    var result2 = 5 && "qwerty";
    console.log(result2);
        /*Результат: "qwerty"
         Обидва операнди істинні, тому результат 
         останній істинний операнд, тобто "qwerty"*/

//+'40' + +'2' + "hillel"
    var result3 = +'40' + +'2' + "hillel";
    console.log(result3);  
        /*  Результат: 42hillel
        1. +'40' = 40 (перетворення рядка в число)
        2. +'2' = 2 (перетворення рядка в число)
        3. 40 + 2 = 42
        4. 42 + "hillel" = "42hillel" (конкатенація числа і рядка)*/

//'10' - 5 === 6
    var result4 = '10' - 5 === 6;
    console.log(result4); 
        /*Результат: false
        1. '10' - 5 = 5 (перетворення рядка в число і віднімання)
        2. 5 === 6 = false  */

//true + false
    var result5 = true + false;
    console.log(result5); 
         /*Результат: 1
        1.true при обчисленні вважається 1, false - 0
        2.1 + 0 = 1 */

//'4px' - 3
    var result6 = '4px' - 3;
    console.log(result6);
         /*Результат: NaN
        1.'4px' не може бути віднято від числа, тому результат - NaN */

//'4' - 3
    var result7 = '4' - 3;
    console.log(result7);
        /*Результат: 1
        '4' при обчисленні вважається числом 4
        4 - 3 = 1    */

//'6' + 3 ** 0
    var result8 = '6' + 3 ** 0;
    console.log(result8); 
         /*Результат: 61
        1. 3 ** 0 = 1 (3 в ступені 0)
        2. '6' + 1 = '61'    */

//12 / '6'
    var result9 = 12 / '6';
    console.log(result9); 
         /*Результат: 2
        1. '6' при обчисленні вважається числом 6
        2. 12 / 6 = 2*/

//'10' + (5 === 6)
    var result10 = '10' + (5 === 6);
    console.log(result10); 
        /*Результат: 10false
        1.  1. 5 === 6 = false
        2.  2. '10' + false = "10false"  */

//null == ''
    var result11 = null == '';
    console.log(result11); 
        /*Результат: false
        1. null при порівнянні за значенням рівний тільки undefined
          */

//3 ** (9 / 3)
    var result12 = 3 ** (9 / 3);
    console.log(result12);   
        /*Результат: 27
        1.  1. 9 / 3 = 3
        2.  3 ** 3 = 27 (піднесення до ступеня)
          */

//!!'false' == !!'true'
    var result13 = !!'false' == !!'true';
    console.log(result13); 
        /*Результат: true
         1. !!'false' = false (перетворення рядка в булеве значення і інверсія)
         2. !!'true' = true
         3. false == true = false (порівняння за значенням)
          */


//0 || '0' && 1
    var result14 = 0 || '0' && 1;
    console.log(result14);
         /*Результат: 1
         1. 1. 0 || '0' = '0' (логічне або повертає перший істинний операнд, або останній, якщо обидва істинні)
         2. '0' && 1 = 1 (логічне і повертає останній істинний операнд)
          */

//(+null == false) < 1
    var result15 = (+null == false) < 1;
    console.log(result15);
         /*Результат: false
         1.+null == false: null перетворюється на число 0, і порівняння стає 0 == false, що правдиве, так як false перетворюється на 0.
         2. true < 1: true перетворюється на 1, і порівняння стає 1 < 1, що є неправдивим.
          */

//false && true || true
    var result16 = false && true || true;
    console.log(result16);
         /*Результат: true
         1. false && true = false (логічне і повертає перший хибний операнд)
         2. false || true = true (логічне або повертає перший істинний операнд)
          */

//false && (false || true)
    var result17 = false && (false || true);
    console.log(result17);
         /*Результат: false
         1. false || true = true (логічне або повертає перший істинний операнд)
         2. false && true = false (логічне і повертає перший хибний операнд)
          */

//(+null == false) < 1 ** 5
    var result18 = (+null == false) < 1 ** 5;
    console.log(result18);
        /*Результат: false
         1. +null = 0 (перетворення null в число)
         2. 0 == false = true (порівняння за значенням)
         3. 1 ** 5 = 1 (піднесення до ступеня)
         4. true < 1 = false (порівняння за значенням)  */