// const sum = require('./sum');
const { sum, sumOf } = require('./sum');

// test는 새로운 테스트 케이스를 만드는 명령어 , *it으로 대체가능하다
// expect는 특정 값이 ~일 것이다 라고 사전에 정의, 만약 통과를하면 테스트를 성공 시키고 통과하지 못하면 테스트를 실패 시킨다
// toBe는 matchers로, 특정 값이 어떤 조건을 만족하는지, 또는 어떤 함수가 실행 됐는지, 에러가 났는지 확인 해 줌

test('1 + 2 = 3', () => {
    expect(sum(1, 2)).toBe(3);
});

// it으로 테스트 케이스를 만들 때는, 테스트 설명을 키워드로 넣어 줄 수 있다.
it('calculates 1 + 2', () => {
    expect(sum(1, 2)).toBe(3);
});

// describe를 사용해서 여러 테스트 케이스를 묶기

describe('sum', () => {
    it('calculates 1 + 2', () => {
        expect(sum(1, 2)).toBe(3);
    });

    it('calculates all numbers', () => {
        const array = [1, 2, 3, 4, 5];
        expect(sumOf(array)).toBe(15);
    });
});
