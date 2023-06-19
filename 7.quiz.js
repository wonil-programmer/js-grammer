function iterate(max, action) {
    for (let i = 0; i < max; i++) {
        action(i);
    }
}

function log(num) {
    console.log(num);
}

function doubleAndLog(num) {
    console.log(num * 2);
}

iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));

setTimeout(() => {
    console.log('1초 뒤 이 함수가 실행됨')
}, 1000);