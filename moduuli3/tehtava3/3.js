'use strict';
const names = ['John', 'Paul', 'Jones'];
const target = document.getElementById('target')
let list = ''

for(let i = 0; i<names.length; i++){
  list += "<li>" + names[i]+ "</li>"
}
target.innerHTML = list