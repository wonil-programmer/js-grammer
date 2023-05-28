const obj = {
    name: '엘리',
    age: 20,
};

obj.name;
obj.age;

function addKey(obj, key, value) {
    obj[key] = value;
}

addKey(obj, 'job', 'engineer');
console.log(obj);

function deleteKey(obj, key) {
    delete object[key];
}