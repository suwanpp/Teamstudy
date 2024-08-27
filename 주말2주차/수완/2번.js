
// 두 개의 함수를 작성하고 이를 조합하여 특정 계산을 수행하는 함수를 작성하시오
// 1. multiply : 두 개의 숫자를 매개변수로 받아 그 곱을 반환한다.
// 2. addTen : 하나의 숫자를 매개변수로 받아, 그 숫자에 10을 더한 값을 반환한다.
// 3. calculate : mulitply와 addTen 함수를 활용하여, 주어진 두 숫자의 곱에 10을 더한 값을 반환한다.



// 두 숫자를 곱하는 화살표 함수 multiply
const multiply = (a, b) => a * b;

// 하나의 숫자에 10을 더하는 화살표 함수 addTen
const addTen = (num) => num + 10;

// multiply와 addTen 함수를 조합하여 최종 결과를 계산하는 함수 calculate
const calculate = (a, b) => {
    const product = multiply(a, b);  // 두 숫자의 곱을 계산
    const result = addTen(product);  // 그 곱에 10을 더함
    return result;
};

// 예시
const result = calculate(5, 3);
console.log(result); // 출력: 25

