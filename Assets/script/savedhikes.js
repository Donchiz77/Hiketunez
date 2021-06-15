
// JSON.parse takes string formatted in JSON format and generates a javascript
// object.  Localstorage.getItem will retrieve string associated with the 
// specified key.  
var savedHikes = JSON.parse( localStorage.getItem( "HikeTunez Saved Hikes" ) );

// data is hike object, the function will push it onto the saved hikes array
// then save it into local storage as a JSON formatted string. If there are no
// saved hikes yet, it will create an empty array.  Local storage can only
// retrieve or save strings.  If you need to save JSON objects or arrays, use
// JSON parse or stringify

function saveHike(data) {
    if( savedHikes === null ) {
        savedHikes = [];
    }
    savedHikes.push(data);
    localStorage.setItem("HikeTunez Saved Hikes", JSON.stringify(savedHikes));
}

// removes hike data from specified index and then saves the rest of the array
// back into local storage.  Splice function specifies where to start and how
// many elements to remove.  True is the hint given to function to determine 
//whether clear hike button or save hike button is displayed. 

function removeHike(index){
    savedHikes.splice(index, 1);
    localStorage.setItem("HikeTunez Saved Hikes", JSON.stringify(savedHikes));
    displayHikes(savedHikes, true);
}

// If there is any saved hikes, displayHikes function shows the results

if (savedHikes) displayHikes(savedHikes, true);
