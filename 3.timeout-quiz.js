// 주어진 seconds가 지나면 콜백함수 호출 (seconds<0 인 경우, 에러호출)
function runInDelay(callback, seconds) {
    if(!callback) {
        throw new Error('callback 함수를 전달해야 함');
    }
    if (!seconds || seconds < 0) {
        throw new Error("0보다 큰 수 입력");
    }
    setTimeout(callback, seconds * 1000);
}

try {
    runInDelay(() => {
        console.log('타이머 완료');
    }, -1)
} catch (error) {
}