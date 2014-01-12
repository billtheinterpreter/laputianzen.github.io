

/* change text decoration when mouse move in or move out */
var FB_Login = document.getElementById('login');

FB_Login.addEventListener('mouseover', addUnderline, false);
function addUnderline(){
	this.style.textDecoration = 'underline';
	this.style.color = 'red';
	this.style.cursor = 'pointer';
};

FB_Login.addEventListener('mouseout', removeUnderline, false);
function removeUnderline(){
	this.style.textDecoration = 'none';
	this.style.color = 'blue';
};
