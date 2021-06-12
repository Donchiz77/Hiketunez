var savedHikes = JSON.parse( localStorage.getItem( "HikeTunez Saved Hikes" ) );

function saveHike(data) {
    console.log("working?");
    if( savedHikes === null ) {
        savedHikes = [];
    }
    savedHikes.push(data);
    localStorage.setItem("HikeTunez Saved Hikes", JSON.stringify(savedHikes));
}

if (savedHikes) displayHikes(savedHikes);
