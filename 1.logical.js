const obj1 = { name: 'dog' };
const obj2 = { name: 'cat', owner: 'Wonil' };
const obj3 = undefined;

if (obj1 || obj2) {
    console.log('둘다 true');
}

let result = obj1 && obj2;
console.log(result); // { name: 'cat', owner: 'Wonil' }
result = obj3 && obj1;
console.log(result); // undefined

result = obj1 || obj2;
console.log(result); // { name: 'dog' }

function changeOwner(animal) {
    if (!animal.owner) {
        throw new Error("주인이 없음");
    }
    animal.owner = '바뀐주인!';
}

function makeNewOwner(animal) {
    if (animal.owner) {
        throw new Error('주인이 있어')
    }
    animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1); // obj1 그대로 출력
console.log(obj2); // { name: 'cat', owner: '바뀐주인!' }

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1); // { name: 'dog', owner: '새로운주인!' }
console.log(obj2); // obj2 그대로 출력

// 널 체크
let item = { price: 1 };
const price = item && item.price;
console.log(price); // 1

// 기본값 설정: 값이 falshy한 경우(0, -0, null, '', undefined) 모두 취급
function print(message) {
    const text = message || 'Hello';
    console.log(text); // Hello
}
print(); 
print(undefined);
print(null);
print(0);