const regex = /^(?:(?!A).){6,}$/;
const testString = "abc123";

if (regex.test(testString)) {
    console.log("Рядок відповідає умовам.");
} else {
    console.log("Рядок не відповідає умовам.");
}