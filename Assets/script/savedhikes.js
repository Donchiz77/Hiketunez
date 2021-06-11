var savedHikes = JSON.parse( localStorage.getItem( "HikeTunez Saved Hikes" ) );

function saveHike(data) {
    if( savedHikes === null ) {
        savedHikes = [];
    }
    savedHikes.push(data);
    localStorage.setItem("HikeTunez Saved Hikes", JSON.stringify(savedHikes));
}