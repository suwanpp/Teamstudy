
// 음수와 양수를 구분하여 각각 다른 배열에 저장하고, 그 결과를 객체 형태로 반환
// 주어진 배열
const numbers = [3, -1, 4, -2, 0, 7, -5];

// 양수와 음수를 구분하여 저장할 배열
const positives = [];
const negatives = [];

// 배열을 순회하며 양수와 음수를 분리
for (const num of numbers) {
    if (num > 0) {
        positives.push(num);
    } else if (num < 0) {
        negatives.push(num);
    }
}

// 결과 객체 생성
const result = {
    positives: positives,
    negatives: negatives
};

console.log(result);