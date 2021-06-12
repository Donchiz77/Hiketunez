// Button Variables
var searchPlacesBtn = document.querySelector("#searchPlacesBtn");
var searchParksBtn = document.querySelector("#searchParksBtn");
var userInput = document.querySelector("#userInput");
// Modal Variables
var cards = document.querySelector("#cards");
var modalTitle = document.querySelector(".card-title");
var cardInfo = document.querySelector(".card-info");
var modalAddress = document.querySelector(".modal-address");
var hikeData = [];




// Event listener for search for location
searchParksBtn.addEventListener("click", parks);
searchPlacesBtn.addEventListener("click", places);

function clearChildren( parent ) {
    if( parent === null ) return;

    var node = parent.firstChild;
    while( node ) {
        var remove = node;
        node = node.nextSibling;
        parent.removeChild( remove );
    }
}

function displayHikes(hikes){
    clearChildren(cards);
    for (i = 0; i < hikes.length; i++) {
        //Building Card
        var infoCard = document.createElement("div");
        infoCard.setAttribute("id", `card${i}`);
        infoCard.setAttribute("class", "modal-card");
        cards.appendChild(infoCard);

        var title = document.createElement("h1");
        title.textContent = hikes[i].name;
        infoCard.appendChild(title);

        var listingDescription = document.createElement("p");
        listingDescription.textContent = hikes[i].description;
        infoCard.appendChild(listingDescription);
        title.classList.add("modal-title");
        listingDescription.classList.add("modal-description");

        //Buttons
        var playMusicBtn = document.createElement("button");
        playMusicBtn.innerHTML = "Soundtrack";
        playMusicBtn.classList.add("playMusicBtn");
        infoCard.appendChild(playMusicBtn);

        var saveHikeBtn = document.createElement("button");
        saveHikeBtn.innerHTML = "Save Hike";
        saveHikeBtn.classList.add("saveHikeBtn");
        saveHikeBtn.setAttribute("id", `save${i}`);
        infoCard.appendChild(saveHikeBtn);

        if (hikes[i].address){
            var addressBtn = document.createElement("button");
            addressBtn.innerHTML = "Address";
            addressBtn.classList.add("addressBtn");
            infoCard.appendChild(addressBtn);
        }
        

        playMusicBtn.addEventListener("click", function () {
            $.get("https://openwhyd.org/adrien/playlist/61/?format=links").done(function (
                data
            ) {
                playPlaylist(data.split("\n"));
            });
        });
        saveHikeBtn.addEventListener("click", function(){
            var index = this.id.substring(4);
            saveHike(hikeData[index]);
        }
        );
     
    }
}
//this is the function for parks
// link https://www.nps.gov/subjects/developer/api-documentation.htm#/
function places() {
  // clearSearch;

  console.log("places is workings");
  fetch(
    "https://developer.nps.gov/api/v1/places?stateCode=nc&api_key=HKetcGoDSbeBjngR2as3P2XiTS7jM8yuNceJ2roz"
  )
    .then((response) => response.json())
    .then((res) => {
        //clearing out previous hike data
        hikeData = [];
      for (i = 0; i < res.data.length; i++) {
        console.log(res.data[i]);
        console.log(res.data[i].title);
        console.log(res.data[i].listingDescription);

        hikeData.push({
            id: hikeData.length,
            name: res.data[i].title,
            description: res.data[i].listingDescription
        });
      }
      displayHikes(hikeData);
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
        //clearing out old hike data
        hikeData = [];
      for (i = 0; i < res.data.length; i++) {
        console.log(res.data[i]);
        console.log(res.data[i].fullName);
        console.log(res.data[i].description);
        console.log(
          res.data[i].addresses[0].line1 + res.data[i].addresses[0].city
        );
        hikeData.push({
            id: hikeData.length,
            name: res.data[i].fullName,
            description: res.data[i].description,
            address: res.data[i].addresses[0]
        });
      } 
      displayHikes(hikeData);
    });
}

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

