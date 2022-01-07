var args = process.argv;
console.log(args);
// [0] : node.js 의 런타임 실행파일 경로
// [1] : node 가 실행시킨 js 파일의 경로
// [2] ~ : 뒤의 입력값들

console.log('A');
console.log('B');
if(args[2] === '1') {
    console.log('C1');
}else {
    console.log('C2');
}
console.log('D2');