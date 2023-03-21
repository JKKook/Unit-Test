function sum(a, b) {
    return a + b;
}

// function sumOf(numbers) {
//     let result = 0;
//     numbers.forEach((n) => {
//         result += n;
//     });
//     return result;
// }

// ** module.exports는 export default와 유사 함.
// module.exports = sum; // 내보내기
// module.exports = sumOf;

// 다수의 모듈을 내보낼 때는 module를 제거 해준다.
exports.sum = sum;
// exports.sumOf = sumOf;

/**
 * 테스트 코드를 작성 했을 떄 얻을 수 있는 이점은,
 * 리팩토링 이후 코드가 제대로 작동하고 있는 것을 검증하기 매우 간편하다는 것이다
 */

function sumOf(numbers) {
    return numbers.reduce((acc, cur) => (acc += cur), 0);
}

exports.sumOf = sumOf;
