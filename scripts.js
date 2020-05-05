// //   ansxed5p3AGVsc5TPLocIqLK9vNnfTFd
// const apiKey='ansxed5p3AGVsc5TPLocIqLK9vNnfTFd'
// const searchUrl='https://api.giphy.com/v1/gifs/search'


// function displayResults(results) {

//     let myHtml = "<div class='row'>";
//     for (res of results) {
//         // console.log(res);
//         myHtml = myHtml + `
//       <div class='col-sm-4'>
//         <img src=${res.images.original.url} />
//       </div>`
//     }

//     myHtml = myHtml + "</div>"

//     console.log(myHtml);
//     $('#results').html(myHtml);

// }

// function fetchDataFromGiphy(searchTerm) {
//     let url = `https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=$('#search')`
//     console.log(url);

    
//     fetch(url)
//         .then(function (response) {
//             return response.json();
//         }).then(function (result) {
//             // console.log(result.data);
//             displayResults(result.data)
//         })

// }

// document.getElementById("myForm").addEventListener("click", checkForm, false);

// function loadApp() {
//     $('#button').on('click', function () {
//         console.log('Get me results!');
//         fetchTheResults('#search');
//         document.getElementById(elementId: 'search');
//     });
//     console.log('Page is loaded!');
//     console.log('Jquery is accessible', $);

//     let searchTerm = 'disney';
//     fetchDataFromGiphy(searchTerm);
// }

// $(loadApp);




function displayResults (results) {

  let myHtml = "<div class='row'>";
  for(res of results){
    // console.log(res);
    myHtml = myHtml + `
    <div class='col-sm-4'>
      <img src=${res.images.original.url} />
    </div>`
  }

  myHtml = myHtml + "</div>"

  console.log(myHtml);
  $('#results').html(myHtml);

}

function fetchDataFromGiphy (searchTerm) {
  let url = `https://api.giphy.com/v1/gifs/search?api_key=4zv45wmD5vJvLn2UE3B4tNBY1ny9kZZV&q=${searchTerm}`
  console.log(url);

  // $.ajax
  // $.getJSON

  fetch(url)
  .then(function(response) {
    return response.json();
  }).then(function(result){
    // console.log(result.data);
    displayResults(result.data)
  })

}


function bootApp() {
  console.log('Page is loaded up!');
  console.log('Jquery is available', $);

  // get data from the form that the user user types in

  let searchTerm = 'disney';
  fetchDataFromGiphy(searchTerm)


}




$(bootApp);