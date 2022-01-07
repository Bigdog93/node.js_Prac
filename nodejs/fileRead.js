var fs = require('fs'); // nodejs의 모듈인 파일 시스템을 쓰겠다.
fs.readFile('sample.txt', 'utf8', function(drr, data) { // 경로는 node가 실행되는 경로 기준
    console.log(data);
});