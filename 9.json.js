const wonil = {
    name: 'wonil',
    age: 25,
    eat: () => {
        console.log('eat');
    },
};

const json = JSON.stringify(wonil);
console.log(wonil);
console.log(json);
const obj = JSON.parse(json);
console.log(obj);