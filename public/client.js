var xhr = XMLHttpRequest();
var valami = 10
var url = 'http://localhost:3000/json/' + valami;

xhr.open('GET', url);
xhr.send()