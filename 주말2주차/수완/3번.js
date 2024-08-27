
// 전역 스코프에서 사용자 정보를 담는 User 객체 생성자를 정의하고, 이 생성자를 통해 여러 사용자의
// 이름과 나이를 저장한 후, 사용자의 나이에 따라 특정 메시지를 출력하는 함수를 작성하세요
// 1. 전역 스코프에서 User 객체 생성자를 정의하여 이름과 나이 저장.
// 2. 여러 사용자의 인스턴스를 생성하고, 이를 전역 배열 users에 저장
// 3. 함수 printMessages를 작성하여, 각 사용자의 나이에 따라 다른 메시지를 출력 (forEach 사용)


// User 객체 생성자 정의 - 이름과 나이를 저장
function User(name, age) {
    this.name = name;
    this.age = age;
}

// 전역 배열 users 선언 및 인스턴스 저장
const users = [
    new User('John', 25),
    new User('Sarah', 17),
    new User('Mike', 30)
];

// 함수 printMessages 작성 - 나이에 따라 다른 메시지 출력
function printMessages() {
    users.forEach(user => {
        if (user.age < 18) {
            console.log(`${user.name}: Children`);
        } else {
            console.log(`${user.name}: Adult`);
        }
    });
}
// 예시  - 각 사용자에 대해 메시지 출력 18세 이상이면 Adult, 미만이면 Children
printMessages();
// 예시 출력:
// John: Adult
// Sarah: Children
// Mike: Adult

