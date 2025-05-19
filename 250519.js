// 프로그래머스

// 두 수의 합 구하기
// function solution(num1, num2) {
//     let answer = num1 + num2;
//     return answer;
// }

// 두 수의 차 구하기
// function solution(num1, num2) {
//     let answer = num1 - num2;
//     return answer;
// }

// 두 수의 곱 구하기
// function solution(num1, num2) {
//     let answer = num1 * num2;
//     return answer;
// }

// 몫 구하기
// function solution(num1, num2) {
//     let answer = parseInt(num1 / num2);
//     return answer;
// }

// => parseInt()는 문자열을 정수로 바꾸는 함수이기 때문에
// 부동소수점 숫자를 정수로 자를 때 쓰는 건 권장되지 않음.
// function solution(num1, num2) {
//     let answer = Math.floor(num1 / num2);
//     return answer;
// }

// 두 수의 나눗셈
// function solution(num1, num2) {
//     let answer = Math.floor((num1 / num2) * 1000);
//     return answer;
// }

// trunc 는 소수점 버리기 floor 은 내림
// function solution(num1, num2) {
//     let answer = Math.trunc((num1 / num2) * 1000);
//     return answer;
// }

// 숫자 비교하기
// function solution(num1, num2) {
//     let answer = -1;
//     if (num1 === num2) answer = 1;

//     return answer;
// }

// => 삼항연산자 사용하기
// function solution(num1, num2) {
//     let answer = num1 === num2 ? 1 : -1;
//     return answer;
// }

// 분수의 덧셈
// function solution(numer1, denom1, numer2, denom2) {
//     let numer = denom1 * denom2;
//     let denom = numer1 * denom2 + denom1 * numer2;
//     let smaller = numer < denom ? numer : denom;
//     let GCD = 1; // 최대공약수
//     for (let i = 2; i <= smaller; i++) {
//         if (numer % i === 0 && denom % i === 0) {
//             GCD = i;
//         }
//     }

//     return [denom / GCD, numer / GCD];
// }

// => 최대공약수 구하는 법: 유클리드 호제법 사용
// const getGCD = (a, b) => (a % b === 0 ? b : getGCD(b, a % b));
// function solution(numer1, denom1, numer2, denom2) {
//     let numer = denom1 * denom2;
//     let denom = numer1 * denom2 + denom1 * numer2;
//     let GCD = getGCD(numer, denom); // 최대공약수

//     return [denom / GCD, numer / GCD];
// }

// 배열 두배 만들기
function solution(numbers) {
    return numbers.map((e) => e * 2);
}
