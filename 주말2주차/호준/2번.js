// 1번
let lastName = "홍";
let firstName = "길동";

console.log("제 이름은 " + lastName + firstName + "입니다.");
console.log(`제 이름은 ${lastName}${firstName}입니다.`);

// 2번 
// 이스케이프 시퀀스는 문자열 내에서 특수한 문자를 표현하기 위해 사용하는 백슬래시로 시작하는 문자
// \n, \t, \r 등등


// 3번
// 불리언 타입은 2가지 true, false

/* 4-1 true,  == (느슨한 연산자)는 타입이 다르지만 값이 같기 때문에 true반환
4-2 false, ===는 타입과 값이 모두 같아야 true 반환.  
4-3 false, null과 undefined는 값과 타입 모두 다르다
4-4 true, isNaN 함수는 인자가 'NaN'인지 확인하고, 맞다면 true 반환
4-5 false, 문자열 비교는 사전 순서로 이루어진다. apple은 banana보다 앞에 위치하므로 false 반환
4-6 false, 두 문자열이 동일하기 때문에 !== 연산자는 false 반환
4-7 동일 */

// 5번 
// key, value
// property - 키,값 쌍으로 이루어진 데이터  
// key - name,age   value - 야옹이, 7

