// scripts.js
var withButtonClass = document.getElementsByClassName('button');
var buttonsLength = withButtonClass.length
for (var i = 0 ; i < withButtonClass.length ; i++) {
	var textContent = withButtonClass[i];
	alert(textContent.innerHTML);
}
