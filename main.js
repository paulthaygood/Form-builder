
var title = document.createElement ('h1');
title.textContent = 'Sign up for my web app'
var formElement = document.querySelector("#form");
console.log([document]);

console.log([formElement]);
var formItem = document.createElement( 'input' );
console.log([formItem]);
formElement.appendChild(formItem);
console.log(formData[0].type);
for (var i = 0; i < formData.length; i++) {
var currentObject = formData[i];
if (currentObject.type === 'textarea'){
  var inputElement = document.createElement('textarea');

}
else{
  var inputElement = document.createElement('input');
}
}
