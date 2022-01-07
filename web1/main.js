var http = require('http');
var fs = require('fs');
var url = require('url'); // url이라는 모듈을 쓸꺼다. nodejs 꺼

var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    console.log(queryData);
    console.log(queryData.id);
    // 기존에 있던 코드.. 별로래
    /* if(_url == '/'){
      // _url = '/index.html';
      title = 'Welcome';
    }
    if(_url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    } */

    console.log(url.parse(_url, true)); // protocol, auth, port 등 url의 각종 정보들이 담겨있음
    // path : 쿼리스트링이 포함된 경로(도메인 이하 /부터)
    // pathname : 쿼리스트링을 뺀 경로

    if(pathname === '/') {
      if(queryData.id === undefined) {
        var title = 'Welcome';
        var description = 'Hello, Node.js';
        var template = `
        <!doctype html>
        <html>
        <head>
          <title>WEB1 - ${title}</title>
          <meta charset="utf-8">
        </head>
        <body>
          <h1><a href="/">WEB</a></h1>
          <ol>
            <li><a href="/?id=HTML">HTML</a></li>
            <li><a href="/?id=CSS">CSS</a></li>
            <li><a href="/?id=JavaScript">JavaScript</a></li>
          </ol>
          <h2>${title}</h2>
          <p>
            ${description}
          </p>
        </body>
        </html>
  
        `
        response.writeHead(200);
        response.end(template);
      }else {
        fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description) {
          var title = queryData.id;
          var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ol>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ol>
            <h2>${title}</h2>
            <p>
              ${description}
            </p>
          </body>
          </html>
    
          `
          response.writeHead(200);
          response.end(template);
          // readFile 함수 내에 위치해야 한다.
        })
      }
    }else {
      response.writeHead(404); // 말머리..? 응답 번호 기재. 404는 Not Found
      response.end('Not Fount');
    }
    
    
    

    /* 응답으로 보내줄 것(문자열 넣으면 그대로 페이지에 나옴..) */
    // response.end(fs.readFileSync(__dirname + url));
     
});
app.listen(3000);