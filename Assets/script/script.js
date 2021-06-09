// Button Variables
var searchBtn = document.querySelector('#searchBtn');
var userInput = document.querySelector('#userInput');
var playMusicBtn = document.querySelector('.playMusicBtn');
var favoriteBtn = document.querySelector('#favoritesBtn');
var saveHikeBtn = document.querySelector('saveHikeBtn');
// Modal Variables
var modalCard = document.querySelector('.modal-card');
var modalTitle = document.querySelector('.card-title');
var cardInfo = document.querySelector('.card-info');


// Location search

// Event listener for search for location
// This function works. Do not edit!
// searchBtn.addEventListener('click', function () {
//     hikeInfo(userInput.value)
//     console.log(userInput.value); 
// });


// Need to fix the jumping to bing when searched.
var map;
window.onload = function hikeInfo() {
    console.log('hello');
    fetch('https://www.bing.com/api/maps/mapcontrol?setmkt=en-us&key=gtuAaeBHapf7XBFBQ4ZV~Xdl98hjuASFWeHOqINZKow~AkyglvfQ4jn1wMwELZatWxyprn5sIvHDEq7GdkuwXyitgVXbPQQW_T7cAmGmJlZZ')
    map = new Microsoft.Maps.Map(document.getElementById('map'), {showSearchBar: true});
    
}

//this is the function for parks. we need to pull the info into divs to load to the page. 
// link https://www.nps.gov/subjects/developer/api-documentation.htm#/
function nps() {
    fetch('https://developer.nps.gov/api/v1/places?stateCode=sc&api_key=HKetcGoDSbeBjngR2as3P2XiTS7jM8yuNceJ2roz')
    .then(response => response.json())
    .then(data => console.log(data));
    
}
// searchBtn.addEventListener('click', nps());
// fetch('https://www.metaweather.com/api//location/search/?query=')
    


playMusicBtn.addEventListener('click', function () {
    /*   fetch('https://openwhyd.org/adrien/playlist/61/?format=json', {
        method: 'GET',
    })
        .then(function (response) {
            console.log(response)
        })
        .then(function (data) {
            // add in what we really want it to do with the data
            console.log(data) 
        }); */
        $.get('https://openwhyd.org/adrien/playlist/61/?format=links').done(function(data){
            console.log(data)
        }) 
    });
  

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
// playMusicBtn.addEventListener('click', function () {
//     fetch('https://openwhyd.org/yvad/playlist/5', {
//     method: 'GET',
// })
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (data) {
//         // add in what we really want it to do with the data
//         console.log(data)
// });
// });


// Link hiking info to song data


// Modal for hike information when clicked on

// Event listener for start hike button that prompts music to play

// Local storage favorite hikes

// Event listener for favorite hikes button

// Page for favorite hikes

function initMap() {
  var options {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
});

$.get('https://developer.nps.gov/api/v1/parks/parks?parkCode=acad&api_key=M0Bd4k4wGIILywauG2LxueJtOIgJjtc8nBrEF7Jd').done(function(data){
        console.log(data);
    })
