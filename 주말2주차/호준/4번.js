const read = {
    hobby : '독서',
    book : '자기계발서',
    name : '아주 세속적인 지혜'
};

for (let key in read) {
    console.log(`${key}(은)는 ${read[key]}입니다.`);
}