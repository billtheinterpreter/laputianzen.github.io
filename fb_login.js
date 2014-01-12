

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

<<<<<<< HEAD
/* Authorization using Facebook */
var cleareyesRef = new Firebase('https://laputianzen.firebaseio.com/');
var myUserID = null;
var auth = new FirebaseSimpleLogin(cleareyesRef, function(error, user) {
	if(user) {
		myUserID = user.id;
=======
var cleareyesRef = new Firebase('https://laputianzen.firebaseio.com/');
var myUserID     = null;
var auth         = FirebaseSimpleLogin(cleareyesRef, function(error, user) {
	if(user) {
		myUserID = user.id;		
>>>>>>> 5b81697693d628ae0caa8df8bf662bbf5826981d
	}
});

FB_Login.addEventListener('click', mouseClick, false);
function mouseClick(){
	auth.login('facebook');
<<<<<<< HEAD
	document.location.href = 'search_place.html';
}
=======
	//document.location.href = 'search_place.html';
};
>>>>>>> 5b81697693d628ae0caa8df8bf662bbf5826981d
