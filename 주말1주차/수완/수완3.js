
const users = [          // name과 age를 포함하는 사용자 객체 배열 선언
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 },
    { name: "David", age: 15 }
];

function processUsers(users) {   // processUser라는 함수 정의 (매개변수 users)
    return users
        .filter(user => user.age >= 18)    // 18세 이상의 사용자만 필터링
        .sort((a, b) => a.age - b.age)     // 나이를 기준으로 오름차순 정렬  
                                           // a-b > 0 이면 b가 a 앞으로 위치함
        .map(user => user.name);           // 사용자 이름만 추출하여 배열로 반환
}

const result1 = processUsers(users);
console.log(result1);  // 출력: ["Alice", "Charlie"]