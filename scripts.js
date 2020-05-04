//   ansxed5p3AGVsc5TPLocIqLK9vNnfTFd
function displayResults(results) {

    let myHtml = "<div class='row'>";
    for (res of results) {
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

function fetchDataFromGiphy(searchTerm) {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=ansxed5p3AGVsc5TPLocIqLK9vNnfTFd&q=${searchTerm}`
    console.log(url);

    fetch(url)
        .then(function (response) {
            return response.json();
        }).then(function (result) {
            // console.log(result.data);
            displayResults(result.data)
        })

}



function loadApp() {
    $('#button').on('click', function () {
        console.log('Get me results!');
        fetchTheResults('#searchbar');
    });
    console.log('Page is loaded!');
    console.log('Jquery is accessible', $);

    // get data from the form that the user user types in

    let searchTerm = 'disney';
    fetchDataFromGiphy(#search)
}




$(loadApp);