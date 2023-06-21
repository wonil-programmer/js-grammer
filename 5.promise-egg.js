function fetchEgg(chicken) {
    return Promise.resolve(`${chicken} => 🥚`);
}
function fryEgg(egg) {
    return Promise.resolve(`${egg} => 🍳`);
}
function getChicken() {
    return Promise.reject(new Error('치킨을 가져올 수 없음!'));
    // return Promise.resolve(`🌳 => 🐓`);
}

getChicken()
// .catch(error =>  {
//     console.log(error.name);
//     return '🐔';
// })
// .then(chicken => fetchEgg(chicken))
// .then(egg => fryEgg(egg))
// .then(friedEgg => console.log(friedEgg))
// 아래와 같이 축약하여 가독성 높임
.catch(error => '🐔')
.then(fetchEgg)
.then(fryEgg)
.then(console.log);