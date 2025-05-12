// 아이큐 테스트

// 홀수 또는 짝수중에 하나만 존재하는 값의 순번을 출력하는 함수를 작성해주세요.

/**
 * 
 * 샘플코드
const foo = (numbers) => {
    return pos;
}
 * 

 * 예시
- ex) "2 4 7 8 10" ⇒ 3 # 7만 홀수
- ex) "1 2 1 1" ⇒ 2 # 2만 짝수

 * 주의할점
- 순번의 시작은 0이 아니라 1입니다.
 *
 */

// let numbers = '2 4 7 8 10';
// let numbers = '1 2 1 1 ';
let numbers = '1 3 1 1 8 1 9 7 5';

const foo = (numbers) => {
    let odd = 0;
    let even = 0;
    let i = 1;

    for (const e of numbers.split(' ')) {
        const num = Number(e);
        const isEven = num % 2 === 0;

        isEven ? even++ : odd++;

        if ((odd >= 2 && even === 1) || (even >= 2 && odd === 1)) {
            return (even === 1) === isEven ? i : i - 1;
        }

        i++;
    }
};

console.log(foo(numbers));
