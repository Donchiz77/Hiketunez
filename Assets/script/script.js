// Button Variables
var searchBtn = document.querySelector('#searchBtn');
var userInput = document.querySelector('#userInput');
var playMusicBtn = document.querySelector('.playMusicBtn');
var favoriteBtn = document.querySelector('#favoritesBtn');
var saveHikeBtn = document.querySelector('saveHikeBtn');
// Modal Variables
var modalCard = document.querySelector('.modal-card');
var modalTitle = document.querySelector('.card-title');
var cardInfo = document.querySelector('card-info');


// Location search

// Event listener for search for location
// searchBtn.addEventListener('click', function () {
    
//     hikeInfo(userInput.value.trim());
//     console.log(value); 


//     // Fetch data from apis to show on map
//     developer.nps.gov/api/v1/places
//     function test (hikeInfo) {
//         fetch('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=M0Bd4k4wGIILywauG2LxueJtOIgJjtc8nBrEF7Jd', {
//         })
//             .then(function (response) {
//                 return response.json();
//             })
//             .then(function (data) {
//                 // add in what we really want it to do with the data
//                 console.log(data)
//         });

//     };
// });    

  

// Fetch song data
playMusicBtn.addEventListener('click', function () {
    fetch('https://openwhyd.org/yvad/playlist/5', {
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


// Link hiking info to song data

// Modal for hike information when clicked on

// Event listener for start hike button that prompts music to play

// Local storage favorite hikes

// Event listener for favorite hikes button

// Page for favorite hikes

