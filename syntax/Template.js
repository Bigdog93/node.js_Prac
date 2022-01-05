var name = 'between';
var letter = 'test ' +name+ ' \
string ' +name+ ' long\n ' +name+ ' version'; // \ : 코드상에서 줄바꾸기, \n 출력시 줄 바꾸기

console.log(letter);

var a = 1; // 1 : 숫자 1이라는 데이터를 표현하는 리터럴

var letter2 = `test ${name} string ${name} long

${name} version`; // `` : 템플릿 리터럴
console.log(letter2);