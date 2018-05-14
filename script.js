var divs = document.getElementsByTagName('div');


var removeFromList = function () {
	document.getElementById(this.getAttribute('class')).appendChild(this);
	this.removeEventListener('click', removeFromList);
	this.addEventListener('click', addToList);
}

var addToList = function () {
	document.querySelector('aside').appendChild(this);
	this.removeEventListener('click', addToList);
	this.addEventListener('click', removeFromList);
}

for (i = 0; i < divs.length; i++) {
	var div = divs[i];
	div.addEventListener('click', addToList);
}


var navs = document.getElementsByTagName('h3');
var previous = 'beer';

var tab = function () {
	if(previous !== undefined) {document.getElementById(previous).style.display = 'none';}
	previous = this.getAttribute('class');
	console.log(this.getAttribute('class'));
	document.getElementById(`${this.getAttribute('class')}`).style.display = 'flex';
}

for (i = 0; i < navs.length; i++) {
	var nav = navs[i];
	nav.addEventListener('click', tab);
}