/*function geoLocation(latitude, longitude){
	this.latitude = latitude;
	this.longitude = longitude;
}*/

var mapLocationArray = [];

mapLocationArray.push({id:0, latitude:25.014908, longitude:121.534216, title:'捷運公館站'});
mapLocationArray.push({id:1, latitude:25.026155, longitude:121.527378, title:'師大校本部'});
mapLocationArray.push({id:2, latitude:25.012305, longitude:121.533301, title:'自來水園區'});
mapLocationArray.push({id:3, latitude:25.013345, longitude:121.543075, title:'台灣科技大學'});
mapLocationArray.push({id:4, latitude:25.024553, longitude:121.545211, title:'國北師'});

mapLocationArray[0].contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Gongguan</h1>'+
      '<div id="bodyContent">'+ '<p> 簡單的公館商圈介紹 </p>' +    
      '<img src="http://www.lanfox.com.tw/uploads/13124292386448zz.jpg" height="150" width="200">'+ '<br>' +
      "<iframe width='250' height='167' src='http://www.youtube.com/embed/eLRlHcCiNjg' frameborder='0' ></iframe>" +
      '</div>'+
      // chat room link
      '<a href = firetube.html> 進入聊天室 </a>' +
      '</div>';
mapLocationArray[1].contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Gongguan</h1>'+
      '<div id="bodyContent">'+ '<p> 簡單的公館商圈介紹 </p>' +    
      '<img src="http://www.lanfox.com.tw/uploads/13124292386448zz.jpg" height="150" width="200">'+ '<br>' +
      "<iframe width='250' height='167' src='http://www.youtube.com/embed/eLRlHcCiNjg' frameborder='0' ></iframe>" +
      '</div>'+
      // chat room link
      '<a href = firetube.html> 進入聊天室 </a>' +
      '</div>';
mapLocationArray[2].contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Gongguan</h1>'+
      '<div id="bodyContent">'+ '<p> 簡單的公館商圈介紹 </p>' +    
      '<img src="http://www.lanfox.com.tw/uploads/13124292386448zz.jpg" height="150" width="200">'+ '<br>' +
      "<iframe width='250' height='167' src='http://www.youtube.com/embed/eLRlHcCiNjg' frameborder='0' ></iframe>" +
      '</div>'+
      // chat room link
      '<a href = firetube.html> 進入聊天室 </a>' +
      '</div>';
mapLocationArray[3].contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Gongguan</h1>'+
      '<div id="bodyContent">'+ '<p> 簡單的公館商圈介紹 </p>' +    
      '<img src="http://www.lanfox.com.tw/uploads/13124292386448zz.jpg" height="150" width="200">'+ '<br>' +
      "<iframe width='250' height='167' src='http://www.youtube.com/embed/eLRlHcCiNjg' frameborder='0' ></iframe>" +
      '</div>'+
      // chat room link
      '<a href = firetube.html> 進入聊天室 </a>' +
      '</div>';
mapLocationArray[4].contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Gongguan</h1>'+
      '<div id="bodyContent">'+ '<p> 簡單的公館商圈介紹 </p>' +    
      '<img src="http://www.lanfox.com.tw/uploads/13124292386448zz.jpg" height="150" width="200">'+ '<br>' +
      "<iframe width='250' height='167' src='http://www.youtube.com/embed/eLRlHcCiNjg' frameborder='0' ></iframe>" +
      '</div>'+
      // chat room link
      '<a href = firetube.html> 進入聊天室 </a>' +
      '</div>';      

/*console.log("geo_latidue:" + mapLocationArray[0].latitude +"geo_longitude:" + mapLocationArray[0].longitude);
console.log(mapLocationArray[0].id);
console.log(mapLocationArray[0].title);
console.log(mapLocationArray[0].contentString);

console.log("geo_latidue:" + mapLocationArray[1].latitude +"geo_longitude:" + mapLocationArray[1].longitude);
console.log(mapLocationArray[1].id);
console.log(mapLocationArray[1].title);
console.log(mapLocationArray[1].contentString);
*/
/*
var gongguan_marker = new google.maps.Marker({
position: 25.014908,121.534216,
map: map,
title: '捷運公館站'
});


var gongguan_marker = new google.maps.Marker({
position: 25.026155,121.527378,
map: map,
title: '師大校本部'
});

var gongguan_marker = new google.maps.Marker({
position: 25.012305,121.533301
map: map,
title: '自來水園區'
});

var gongguan_marker = new google.maps.Marker({
position: 25.013345,121.543075
map: map,
title: '台灣科技大學'
});

var gongguan_marker = new google.maps.Marker({
position: 25.024553,121.545211
map: map,
title: '國北師'
});
*/