// Button Variables
var searchBtn = document.querySelector('#searchBtn');
var userInput = document.querySelector('#userInput');
var playMusicBtn = document.querySelector('.playMusicBtn');
var favoriteBtn = document.querySelector('#favoritesBtn');
var saveHikeBtn = document.querySelector('saveHikeBtn');
// Modal Variables
var cards = document.querySelector('.cards');
var modalCard = document.querySelector('.modal-card');
var modalTitle = document.querySelector('.card-title');
var cardInfo = document.querySelector('.card-info');
var modalAddress = document.querySelector('.modal-address');


// Location search


// Event listener for search for location
// This function works. Do not edit!
searchBtn.addEventListener('click', parks);

// Need to fix the jumping to bing when searched.
// var map;
// window.onload = function hikeInfo() {
//     console.log('hello');
//     fetch('https://www.bing.com/api/maps/mapcontrol?setmkt=en-us&key=gtuAaeBHapf7XBFBQ4ZV~Xdl98hjuASFWeHOqINZKow~AkyglvfQ4jn1wMwELZatWxyprn5sIvHDEq7GdkuwXyitgVXbPQQW_T7cAmGmJlZZ')
//     map = new Microsoft.Maps.Map(document.getElementById('map'), {});
    
// }

//this is the function for parks
// link https://www.nps.gov/subjects/developer/api-documentation.htm#/

function places() {
    console.log('click');
    fetch('https://developer.nps.gov/api/v1/places?stateCode=&api_key=HKetcGoDSbeBjngR2as3P2XiTS7jM8yuNceJ2roz')
    .then(response => response.json())
    .then(res => { 
        for (i=0; i<res.data.length; i++) {
            console.log(res.data[i]);
            console.log(res.data[i].title);
            console.log(res.data[i].listingDescription);
            var title = document.createElement('h1');
            title.textContent = res.data[i].title;
            modalCard.appendChild(title);
            
            var listingDescription = document.createElement('p');
            listingDescription.textContent = res.data[i].listingDescription;
            modalCard.appendChild(listingDescription);
            title.classList.add("modal-title");
            listingDescription.classList.add("modal-description");
              
        }
        
    });
    
}


//This function pulls parks across the U.S.
//The address pulling is not working. Returning object
function parks() {
    console.log('hello');
    fetch('https://developer.nps.gov/api/v1/parks?stateCode=&api_key=HKetcGoDSbeBjngR2as3P2XiTS7jM8yuNceJ2roz')
    .then(response => response.json())
    .then(res => {
        for (i=0; i<res.data.length; i++) {
            console.log(res.data[i]);
            console.log(res.data[i].fullName);
            console.log(res.data[i].description);
            console.log(res.data[i].addresses[0].line1+res.data[i].addresses[0].city);
    
            var fullName = document.createElement('h1');
            fullName.textContent = res.data[i].fullName;
            fullName.classList.add("modal-title");

            var description = document.createElement('p');
            description.textContent = res.data[i].description;
            description.classList.add("modal-description");

            var addresses = document.createElement('p');
            addresses.textContent = res.data[i].addresses[0];
            addresses.classList.add("modal-address");
            
            var infoCard = document.createElement('div');
            infoCard.setAttribute("id", `card${i}`);
            infoCard.setAttribute("class", "model-card");
            cards.appendChild(infoCard);         
            
            
            

            infoCard.appendChild(fullName);
            infoCard.apendChild(description);
            modalCard.appendChild(addresses);
            // modalCard.appendChild(saveHikeBtn);
            // modalCard.appendChild(playMusicBtn);

            var line1 = res.data[i].addresses[0].line1;
            var city = res.data[i].addresses[0].city;
            var state = res.data[i].addresses[0].stateCode;
            var postal = res.data[i].addresses[0].postalCode;
            console.log(line1 + ", " + city + ", " + state + ", " + postal);

            line1 = document.createElement('p');
            line1.classList.add("modal-address");
            city = document.createElement('p');
            city.classList.add("modal-address");
            state = document.createElement('p');
            state.classList.add("modal-address");
            postal = document.createElement('p');
            postal.classList.add("modal-address");

            modalAddress.appendChild(line1);
            modalAddress.appendChild(city);
            modalAddress.appendChild(state);
            modalAddress.appendChild(postal);
        }
    });
}
// searchBtn.addEventListener('click', nps());
// fetch('https://www.metaweather.com/api//location/search/?query=')
    
// if you want to use the forms value in the ns function.  You need to pass it in to the ns like this ns(elementname.value.trim()).
// The ns function should have a parameter like this ns(search).  You can call the parameter whatever you want.  Just know that the parameter will take on the value of the argument that gets passed in.
// elementname.value.trim() becomes search


    // Fetch data from apis to show on map
  /*  function test (hikeInfo) {
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
    }*/
// }}; 

var map;
window.onload = function hikeInfo() {
    console.log('hello');
    fetch('https://www.bing.com/api/maps/mapcontrol?setmkt=en-us&key=gtuAaeBHapf7XBFBQ4ZV~Xdl98hjuASFWeHOqINZKow~AkyglvfQ4jn1wMwELZatWxyprn5sIvHDEq7GdkuwXyitgVXbPQQW_T7cAmGmJlZZ')
    map = new Microsoft.Maps.Map(document.getElementById('map'), {showSearchBar: true});
    
}

// Fetch song data
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
        playPlaylist(data.split("\n"));
    }) 
});


// Fetch song data
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

