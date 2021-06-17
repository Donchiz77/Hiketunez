var savedHikes = JSON.parse( localStorage.getItem( "HikeTunez Saved Hikes" ) );

function saveHike(data) {
    if( savedHikes === null ) {
        savedHikes = [];
    }
    savedHikes.push(data);
    localStorage.setItem("HikeTunez Saved Hikes", JSON.stringify(savedHikes));
}

function removeHike(index){
    savedHikes.splice(index, 1);
    localStorage.setItem("HikeTunez Saved Hikes", JSON.stringify(savedHikes));
    displayHikes(savedHikes, true);
}


if (savedHikes) displayHikes(savedHikes, true);
