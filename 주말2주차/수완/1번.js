// 세 개의 숫자를 매개변수로 받아 그 중 가장 큰 값을 반환하는 함수 findMax를 작성하세요
// 함수 내부에서 변수를 사용하여 비교 연산을 수행

function findMax(a, b, c) {
    let max = a;

    if (b > max) {
        max = b;
    }

    if (c > max) {
        max = c;
    }

    return max;
}

// 예시 
let result = findMax(10, 20, 15);
console.log(result); // 출력: 20