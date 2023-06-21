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
getBanana()
.then(banana => 
    getApple()
        .then(apple => [banana, apple])
)
.then(console.log);

// function fetchFruits() {
//     return getBanana()
//     .then(banana => 
//         getApple()
//             .then(apple => [banana, apple])
//     );
// }
// fetchFruits()
//     .then(console.log);

// async 버전 : 비동기적 코드를 동기적(절차적)으로 작성가능
async function fetchFruits() {
    const banana = await getBanana();
    const apple = await getApple();
    return [banana, apple];
}
