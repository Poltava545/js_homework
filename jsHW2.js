function pad(str, char, count, isStart) {
    let padding = '';
    for (let i = str.length; i < count; i++) {
        padding += char;
    }
    return isStart ? padding + str : str + padding;
}

console.log(pad('qwerty', '+', 10, true));  // поверне "++++qwerty"
console.log(pad('qwerty', '+', 10, false));  // поверне "qwerty++++"