
var searchBtn = document.querySelector('#searchBtn');
var userInput = document.querySelector('#userInput');
var playMusicBtn = document.querySelector('.playMusicBtn');
var favoriteBtn = document.querySelector('#favoritesBtn');

// Location search

// Event listener for search for location
searchBtn.addEventListener('click', function () {
    hikeInfo(userInput.value.trim());
    console.log(value); 


    // Fetch data from apis to show on map
    function hikeInfo (){
        fetch('link map api', {
            method: 'GET',
        })
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // add in what we really want it to do with the data
                console.log(data)
        });

};

// Fetch song data
playMusicBtn.addEventListener('click', function () {
    fetch('https://openwhyd.org/adrien/playlist/61', {
    method: 'GET',
})
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        // add in what we really want it to do with the data
        console.log(data)
});
});
});

// Link hiking info to song data

// Modal for hike information when clicked on

// Event listener for start hike button that prompts music to play

// Local storage favorite hikes

// Event listener for favorite hikes button

// Page for favorite hikes