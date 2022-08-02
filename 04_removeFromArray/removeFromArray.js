const removeFromArray = function (arr, ...args) {
    let result = [];
    let flag = true;
    for (let j = 0; j < arr.length; j++) {
        flag = true;
        for (let i = 0; i < args.length; i++)
            if (arr[j] === args[i]) {
                flag = false;
            }
        if (flag) {
            result.push(arr[j]);
        }
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
