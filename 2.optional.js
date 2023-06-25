let obj = { name: 'dog', owner: { name: 'wonil' }};
function printOwnerName(obj) {
    const ownerName = obj?.owner?.name;
    console.log(ownerName);
}
printOwnerName(obj);