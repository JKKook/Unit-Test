# 유닛 테스트

## 작업환경 설정

```shell
yarn add jest
```

VSC에서 인테리센스 지원

```shell
yarn add @types/jest
```

## 자바스크립트 테스트 튜토리얼

### 테스트 코드 설명

-   test / it
-   expect
-   toBe
-   describe

```shell
 - test는 새로운 테스트 케이스를 만드는 명령어 , *it으로 대체가능하다
 - expect는 특정 값이 ~일 것이다 라고 사전에 정의, 만약 통과를하면 테스트를 성공 시키고 통과하지 못하면 테스트를 실패 시킨다
 - toBe는 matchers로, 특정 값이 어떤 조건을 만족하는지, 또는 어떤 함수가 실행 됐는지, 에러가 났는지 확인 해 줌
 - describe를 사용해서 여러 테스트 케이스를 묶기
```

### 예제

```js
// sum.js

function sum(a, b) {
    return a + b;
}

function sumOf(numbers) {
    let result = 0;
    numbers.forEach((n) => {
        result += n;
    });
    return result;
}

exports.sum = sum;
exports.sumOf = sumOf;

// sum.test.js

const { sum, sumOf } = require('./sum');
test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});

describe('sum', () => {
    it('calculates 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('calculates all numbers', () => {
        const array = [1, 2, 3, 4, 5];
        expect(sumOf(array)).toBe(15);
    });
});
```

### 테스트 결과

<img src='./image/test.png'>

### 리팩토링

코드 테스트를 확인 후에, 리팩터링하는 습관을 갖는 것이 좋다.
위 함수는 고차함수를 통해, 변수를 만들어야 하는 번거로움 있으니 forEach => reduce 배열 매서드를 통해 리팩터링.

```js
/**
 * 테스트 코드를 작성 했을 떄 얻을 수 있는 이점은,
 * 리팩토링 이후 코드가 제대로 작동하고 있는 것을 검증하기 매우 간편하다는 것이다
 */

function sumOf(numbers) {
    return numbers.reduce((acc, cur) => (acc += cur), 0);
}

exports.sumOf = sumOf;
```
