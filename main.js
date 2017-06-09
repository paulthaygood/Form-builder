
var title = document.createElement('h1');
title.textContent= "Sign Up For My Web App";
form.appendChild(title);

var formElement = document.querySelector('#form');
console.log(document);
console.log([formElement]);
for (var i = 0; i < formData.length; i++) {
  var currentObject =formData[i];
  if(currentObject.type === "textarea"){
    var inputElement = document.createElement('textarea');

 }else if(currentObject.type === 'select'){
    var inputElement = document.createElement('select');
    inputElement.innerHTML = '<option value="" disabled selected>' + formData[i].label + '</option>'
for ( j in formData[i].options){
  var option = document.createElement('option')
  option.label = formData[i].options[j].label;
  option.value = formData[i].options[j].value;
  inputElement.appendChild(option);
}
  }
  else{
  var inputElement = document.createElement('input');
  }
  inputElement.id = currentObject.id;
  inputElement.type = currentObject.type;
  inputElement.placeholder = currentObject.label;
  formElement.appendChild(inputElement)
}

var newDiv = document.createElement('div');
var formSubmit = document.createElement('input');
formSubmit.type = 'button';
formSubmit.value = 'submit form';
formSubmit.id = 'submit-btn';
formElement.appendChild(newDiv);
newDiv.appendChild(formSubmit);
