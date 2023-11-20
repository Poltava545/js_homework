
let myObject = {
    property1: 'Значення1',
    property2: 'Значення2',
    property3: 'Значення3',
  
    getInfo: function() {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                console.log(`${key}: ${this[key]}`);
            }
        }
    }
};

//myObject.getInfo();

myObject.newProperty = 'Нова властивість!';

myObject.getInfo();