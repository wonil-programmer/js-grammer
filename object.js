// Object literal { key: value}
// new Object()
// Object.create()
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체 (함수)
let apple = {
    name: 'apple',
    'hello-bye': '👍',
    0: 1,
    ['hello-bye1']: '👍',
}

console.log(apple.name);
console.log(apple['hello-bye1']);
console.log(apple['name']);

apple.emoji = 'apple';
