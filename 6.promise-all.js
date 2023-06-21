function getBanana() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍌');
        }, 1000);
    });
}

function getApple() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('🍎');
        }, 3000);
    });
}

function getOrange() {
    return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가져오기
// getBanana()
// .then(banana => 
//     getApple()
//         .then(apple => [banana, apple])
// )
// .then(console.log);

Promise.all([getBanana(), getApple()])
    .then(fruits => console.log('all', fruits));

Promise.race([getBanana(), getApple()])
    .then(fruit => console.log('race', fruit));

    Promise.all([getBanana(), getApple(), getOrange()])
    .then(fruits => console.log('all-error', fruits))
    .catch(console.log);