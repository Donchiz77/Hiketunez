// Button Variables
var searchPlacesBtn = document.querySelector("#searchPlacesBtn");
var searchParksBtn = document.querySelector("#searchParksBtn");
var userInput = document.querySelector("#userInput");
// Modal Variables
var cards = document.querySelector("#cards");
var modalTitle = document.querySelector(".card-title");
var cardInfo = document.querySelector(".card-info");
var modalAddress = document.querySelector(".modal-address");

// Location search

// Event listener for search for location
searchParksBtn.addEventListener("click", parks);
searchPlacesBtn.addEventListener("click", places);

// function clearSearch() {
//     clearInterval();
//     console.log('hello');
//     fetch('https://www.bing.com/api/maps/mapcontrol?setmkt=en-us&key=gtuAaeBHapf7XBFBQ4ZV~Xdl98hjuASFWeHOqINZKow~AkyglvfQ4jn1wMwELZatWxyprn5sIvHDEq7GdkuwXyitgVXbPQQW_T7cAmGmJlZZ')
//     map = new Microsoft.Maps.Map(document.getElementById('map'), {});

// }

//this is the function for parks
// link https://www.nps.gov/subjects/developer/api-documentation.htm#/
//function searchBtn() {
const TestList = document.querySelector("ul");
const UrlTest = new Request("Places.json");
fetch(
  "https://developer.nps.gov/api/v1/places?stateCode=sc&api_key=HKetcGoDSbeBjngR2as3P2XiTS7jM8yuNceJ2roz"
)
  // method: 'PUT',
  // headers:{
  //'Content-Type':'application/json; charset=UTF-8'
  //},
  // body: JSON.stringify({
  // place: "Park name"
  // })
  //})
  .then((Response) => Response.json())
  .then((title) => console.log(title)); // {
// for(const title of data.title) {
// let listItem = document.createElement('li');
// listItem.appendChild(
//     document.createElement('strong')
// ).textContent = title.Name;
// listItem.append(
//    Place.Location
// );
// listItem.appendChild(
//  document.createElement('strong')
// ).textContent = title.Rating
// TestList.appendChild(listItem);
// }
// });

//.catch(console.error);
//}
//console.log()
function places() {
  // clearSearch;

  console.log("places is workings");
  fetch(
    "https://developer.nps.gov/api/v1/places?stateCode=nc&api_key=HKetcGoDSbeBjngR2as3P2XiTS7jM8yuNceJ2roz"
  )
    .then((response) => response.json())
    .then((res) => {
      for (i = 0; i < res.data.length; i++) {
        console.log(res.data[i]);
        console.log(res.data[i].title);
        console.log(res.data[i].listingDescription);

        //Building Card
        var infoCard = document.createElement("div");
        infoCard.setAttribute("id", `card${i}`);
        infoCard.setAttribute("class", "modal-card");
        cards.appendChild(infoCard);

        var title = document.createElement("h1");
        title.textContent = res.data[i].title;
        infoCard.appendChild(title);

        var listingDescription = document.createElement("p");
        listingDescription.textContent = res.data[i].listingDescription;
        infoCard.appendChild(listingDescription);
        title.classList.add("modal-title");
        listingDescription.classList.add("modal-description");

        //Buttons
        var playMusicBtn = document.createElement("button");
        playMusicBtn.innerHTML = "Soundtrack";
        playMusicBtn.classList.add("playMusicBtn");
        cards.appendChild(playMusicBtn);

        var saveHikeBtn = document.createElement("button");
        saveHikeBtn.innerHTML = "Save Hike";
        saveHikeBtn.classList.add("saveHikeBtn");
        cards.appendChild(saveHikeBtn);

        var addressBtn = document.createElement("button");
        addressBtn.innerHTML = "Address";
        addressBtn.classList.add("addressBtn");
        cards.appendChild(addressBtn);

        playMusicBtn.addEventListener("click", function () {
            $.get("https://openwhyd.org/adrien/playlist/61/?format=links").done(function (
              data
            ) {
              playPlaylist(data.split("\n"));
            });
          });
        saveHikeBtn.addEventListener;
        // $('.saveBtn').on('click', function () {
        //     var input = $(this).siblings('.description').val();
        //     var time = $(this).parent().attr('id');

        //     localStorage.setItem(time, input);
        // });
      }
    });
}

//  (res.data[i].listingDescription === null) {
//     cards.style.display = "none"

//This function pulls parks across the U.S.
//The address pulling is not working. Returning object
function parks() {
  // clearSearch;

  console.log("hello");
  fetch(
    "https://developer.nps.gov/api/v1/parks?stateCode=nc&api_key=HKetcGoDSbeBjngR2as3P2XiTS7jM8yuNceJ2roz"
  )
    .then((response) => response.json())
    .then((res) => {
      for (i = 0; i < res.data.length; i++) {
        console.log(res.data[i]);
        console.log(res.data[i].fullName);
        console.log(res.data[i].description);
        console.log(
          res.data[i].addresses[0].line1 + res.data[i].addresses[0].city
        );

        //Building Card
        var fullName = document.createElement("h1");
        fullName.textContent = res.data[i].fullName;
        fullName.classList.add("modal-title");

        var description = document.createElement("p");
        description.textContent = res.data[i].description;
        description.classList.add("modal-description");

        var addresses = document.createElement("p");
        addresses.textContent = res.data[i].addresses[0];
        addresses.classList.add("modal-address");

        var infoCard = document.createElement("div");
        infoCard.setAttribute("id", `card${i}`);
        infoCard.setAttribute("class", "modal-card");
        cards.appendChild(infoCard);

        //Buttons
        var playMusicBtn = document.createElement("button");
        playMusicBtn.innerHTML = "Soundtrack";
        playMusicBtn.classList.add("playMusicBtn");
        cards.appendChild(playMusicBtn);

        var saveHikeBtn = document.createElement("button");
        saveHikeBtn.innerHTML = "Save Hike";
        saveHikeBtn.classList.add("saveHikeBtn");
        cards.appendChild(saveHikeBtn);

        var addressBtn = document.createElement("button");
        addressBtn.innerHTML = "Address";
        addressBtn.classList.add("addressBtn");
        cards.appendChild(addressBtn);

        infoCard.appendChild(fullName);
        infoCard.appendChild(description);
        // modalCard.appendChild(addresses);
        // infoCard.appendChild(saveHikeBtn);
        // infoCard.appendChild(playMusicBtn);

        //Modal Info for Address
        var line1 = res.data[i].addresses[0].line1;
        var city = res.data[i].addresses[0].city;
        var state = res.data[i].addresses[0].stateCode;
        var postal = res.data[i].addresses[0].postalCode;
        console.log(line1 + ", " + city + ", " + state + ", " + postal);

        line1 = document.createElement("p");
        line1.classList.add("modal-address");
        city = document.createElement("p");
        city.classList.add("modal-address");
        state = document.createElement("p");
        state.classList.add("modal-address");
        postal = document.createElement("p");
        postal.classList.add("modal-address");

        modalAddress.appendChild(line1);
        modalAddress.appendChild(city);
        modalAddress.appendChild(state);
        modalAddress.appendChild(postal);

        addressBtn.addEventListener("click", function modal() {

        });
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
//});

var map;
window.onload = function hikeInfo() {
  console.log("hello");
  fetch(
    "https://www.bing.com/api/maps/mapcontrol?setmkt=en-us&key=gtuAaeBHapf7XBFBQ4ZV~Xdl98hjuASFWeHOqINZKow~AkyglvfQ4jn1wMwELZatWxyprn5sIvHDEq7GdkuwXyitgVXbPQQW_T7cAmGmJlZZ"
  );
  map = new Microsoft.Maps.Map(document.getElementById("map"), {
    showSearchBar: true,
  });
};

// if you want to use the forms value in the ns function.  You need to pass it in to the ns like this ns(elementname.value.trim()).
// The ns function should have a parameter like this nps(search).  You can call the parameter whatever you want.  Just know that the parameter will take on the value of the argument that gets passed in.
// elementname.value.trim() becomes search

// Link hiking info to song data

// Modal for hike information when clicked on

// Event listener for start hike button that prompts music to play

// Local storage favorite hikes

// Event listener for favorite hikes button

// Page for favorite hikes
