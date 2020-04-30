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
// $(".mybtn").on("click",function(e){
//     // Stop the default behaviour.
//     e.preventDefault();
//     //
//     var jsonUrl = this.href + "&json=1";

//     $.ajax({
//         url: jsonUrl,
//         type: "json",
//         method: "get",

//         success: function(data){
//             // do something with the data
//             alert(data);
//         }
//     });

// });

function displayResults(results) {
    let myHtml = "<div class = 'row'>";
    for (res of results) {
        myHtml = myHtml +
            `<div class='col-sm-4'>
        <img src=${res.images.original.url} />
    </div>`
    }

    myHtml = myHtml + "</div>"

    console.log(myHtml);
        $('#results').html{
        myHtml;
    };

}

function fetchDataFromGiphy(searchTerm) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=ansxed5p3AGVsc5TPLocIqLK9vNnfTFd&q=${searchTerm}`
    console.log(url);
}

fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (result) {
        displayResults(result.data)
    })
}
function bootApp() {
    console.log('Page is loaded up!');
    console.log('jquery is available', $);

    let searchTerm = 'corona';
    fetchDataFromGiphy(searchTerm);
}

$(bootApp)