//var results = $.get(`http://api.giphy.com/v1/gifs/search?q=disney&api_key=ansxed5p3AGVsc5TPLocIqLK9vNnfTFd&limit=30`);
//results.done(function(response) {
   // console.log("successfully received data", response);
    //var gifs = response.data

   // for (i in gifs) 
   // {
   // $('.inner').append("<img src='"+gifs[i].images.original.url"' />")
   // }
//});

// var api = 'https://api.giphy.com/v1/gifs/search?';
// var apiKey = '&api_key=dc6zaTOxFJmzC';
// var query = '&q=rainbow';

// function setup() {
//   noCanvas();
//   var url = api + apiKey + query;
//   loadJSON(url, gotData);
// }

// function gotData(giphy) {
//   for (var i = 0; i < giphy.data.length; i++) {
//     createImg(giphy.data[i].images.original.url);
//   }
// }








//$(document).ready(function){
//  fetch(api.giphy.com/v1/gifs/search)
// .then(function(response){
// return response.json();
//})
//}

//let url="ansxed5p3AGVsc5TPLocIqLK9vNnfTFd"
//q: Search query term or phrase
//limit:The maximum number of objects to return"


//javascript, jQuery

var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=ansxed5p3AGVsc5TPLocIqLK9vNnfTFd&limit=5");
xhr.done(function(data) { console.log("success got data", data); });