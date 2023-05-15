let obj1 = { name: "person1", age: 5 };
let obj2 = { age: 5, name: 'person1' };

let isSame = true;
let obj1keys = Object.keys(obj1).sort();
let obj2keys = Object.keys(obj2).sort();

(obj1keys.length != obj2keys.length) ? isSame = false : null;

for (let key of obj1keys) {
    if (obj2keys.includes(key)) {
        if (obj1[key] != obj2[key]) {
            isSame = false;
            break;
        }
    }
    else {
        isSame = false;
        break;
    }
}

console.log(isSame ? 'same' :  'different');