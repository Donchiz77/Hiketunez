var savedHikes = JSON.parse( localStorage.getItem( "HikeTunez Saved Hikes" ) );

function saveHike(data) {
    console.log("working?");
    if( savedHikes === null ) {
        savedHikes = [];
    }
    savedHikes.push(data);
    localStorage.setItem("HikeTunez Saved Hikes", JSON.stringify(savedHikes));
    renderHike();
}

function renderHike() {
    console.log("is this working");
    var listItem = JSON.parse(localStorage.getItem("HikeTunez Saved Hikes"));
    if (listItem !== null) {
        document.querySelector("#cards").textContent = savedHikes;
    }
}
