const stringArray = ["hello world", "this is a test", "javascript is awesome"];

const titleCaseArray = [];

stringArray.forEach(str => {
    const titleCaseStr = str.replace(/\b\w/g, txt => txt.toUpperCase());
    titleCaseArray.push(titleCaseStr);
});

console.log(titleCaseArray);
