// TDD 연습

// 1. 최댓값 구하기 max 함수
// exports.max = (numbers) => {
//     let result = numbers[0];
//     numbers.forEach((n) => {
//         if (n > result) {
//             result = n;
//         }
//     });
//     return result;
// };

// 2. 최솟값 구하기 min 함수, 2보다 작을 경우 -1 리턴
// exports.min = (numbers) => {
//     let result = numbers.sort((a, b) => a - b)[0];
//     numbers.forEach((num) => {
//         if (num < result) {
//             result = num;
//         } else if (num < 2) {
//             result = -1;
//         }
//     });
//     return result;
// };
// console.log(numbers);
// console.log(typeof []);

// 테스트 통과 후 리팩터링
exports.max = (numbers) => {
    // return Math.max(...numbers);
    // return numbers.reduce((acc, cur) => Math.max(acc, cur));
    return numbers.sort((a, b) => b - a)[0];
};

exports.min = (numbers) => {
    return numbers.reduce((acc, cur) => {
        let miniumNum = Math.min(acc, cur);
        return miniumNum > 2 ? miniumNum : -1;
    });
};
