// smartly choose specific javascript to run
$(document).ready(function(){
	Initializer[$('body').attr('id')]();
})


// Create Simple Login using facebook and Firebase
//location
//var commentsRef = new Firebase('https://laputianzen.firebaseio.com/'+location+'/comments');
var commentsRef = new Firebase('https://laputianzen.firebaseio.com/comments');
var myUserID = null;
var myUserFirstName = null;
var myUserLastName = null;
var auth = new FirebaseSimpleLogin(commentsRef, function(error, user) {
	if(user) {
		myUserID = user.id;
		myUserFirstName = user.first_name;
		myUserLastName = user.last_name;
		$("#loginDiv").text(myUserFirstName + " " + myUserLastName);
	}
});



var Initializer = {}
Initializer.main = function(){
 //Login page
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

	FB_Login.addEventListener('click', mouseClick, false);
	function mouseClick(){
		auth.login('facebook');
		document.location.href = 'search_place.html';
	};
}
Initializer.map = function(){
 //Map page

}

Initializer.chat = function(){
 //Chat page
 	auth.login('facebook');
	 //show user name on top loginDiv section
	 //	$("#loginDiv").text(myUserFirstName + " " + myUserLastName);
 	//Create a query for only the last 10 comments
	var last10Comments = commentsRef.limit(10);
	//Render Comments
	last10Comments.on('child_added', function (snapshot) {
	  var comment = snapshot.val();
	  var newDiv = $("<div/>").addClass("comment").attr("id",snapshot.name()).appendTo("#comments");
	  FB.api("/" + comment.userid, function(userdata) {
	    comment.name = userdata.name;
	    newDiv.html(Mustache.to_html($('#template').html(), comment));
	    
	    var raw = $(newDiv).find("span").html();
	    links = getURLfromTEXT(raw);
	    for (key in links){
	    	var link = links[key];
	    	//console.log(link);
	    	//console.log(link.indexOf('//www.youtube.com/watch?v='));
		    if (link.indexOf('//www.youtube.com/watch?v=') != -1)  { // youtube video
		    	var index = link.indexOf('=')+1;
		    	var id = link.slice(index);
		    	//console.log(id);
 	            raw = raw.replace(link,'<iframe width="320" height="240" src="//www.youtube.com/embed/'+id+'"></iframe>');
		    }
		    // image  (end with jpg)
		    else if (endsWith(link,'.jpg')||endsWith(link,'.png')||endsWith(link,'.gif')) {
		    	console.log(endsWith(link,'.jpg'));
		    	console.log(endsWith(link,'.gif'));
		    	console.log(endsWith(link,'.png'));
		    	raw = raw.replace(link,'<img width="320" height="240" src="'+link+'">'+'<a href="'+link+'">'+link+'</a>');
		    }
		    else {
		    	// web link
		    	raw = raw.replace(link,'<a href="'+link+'">'+link+'</a>');  // 同一個網址會被包來包去	
		    }
		    
		}
		    $(newDiv).find("span").html(raw);
		
	  });
	});

	//Add New Comments
	window.onCommentKeyDown = function(event) {
	  if(event.keyCode == 13) {
	    if(myUserID == null) {
	      alert("You must log in to leave a comment");
	    } else {
	      commentsRef.push({userid: myUserID, body: $("#text").val()})
	      $("#text").val("");
	    }
	    event.preventDefault();
	  }
	};
}

function getURLfromTEXT(text){
	return text.match(/(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig);
}

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
/*
function replaceURLWithHTMLLinks(text) {
    var exp = /(\b(https?):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(exp,"<a target='_blank' href='$1'>$1</a>"); 
}
*/