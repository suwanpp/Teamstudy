
var fruit = {
    name : 'apple',
    color : 'green'

};

// 1번 마침표 표기법으로 red 변경
fruit.color = 'red';

// 2번 대괄호 표기법으로 프로퍼티 추가
fruit['shape'] = 'circle';

// 3번 마침표 표기법으로 이름 지우기
delete fruit.name;

// 4번 대괄호 표기법으로 색깔 지우기
delete fruit['color'];

// 5번 마침표 표기법으로 망고 추가
fruit.name = 'mango'; 

// 6번 대괄호 표기법으로 색깔 추가
fruit['color'] = 'blue'

console.log(fruit);
