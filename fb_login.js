

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

/* Authorization using Facebook */
//var cleareyesRef = new Firebase('https://laputianzen.firebaseio.com/');
//var myUserID = null;
var auth = new FirebaseSimpleLogin(commentsRef, function(error, user) {
	if(user) {
		myUserID = user.id;
	}
});

FB_Login.addEventListener('click', mouseClick, false);
function mouseClick(){
	auth.login('facebook');
	document.location.href = 'search_place.html';
};
