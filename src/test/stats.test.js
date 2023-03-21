const stats = require('../code/stats');

// max 함수 배열의 최댓값 구하는 테스터
// min 함수를 구하지만 2보다 작을 땐 -1을 리턴하는 테스터
describe('stats', () => {
    it('gets maxium value', () => {
        expect(stats.max([1, 2, 3, 4])).toBe(4);
    });
    it('gets minium value. but if the num is smaller than 2 , return -1', () => {
        expect(stats.min([1, -2, -10])).toBe(-1);
    });
});
