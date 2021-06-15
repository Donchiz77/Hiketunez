var player;
var currentPlaylist;

// Plays next youtube video in playlist: openwhyd playlists could have multiple
// different formats such as soundcloud, spotify, etc.  We only implemented 
// YouTube and skipped all non-youtube URLs.  Shift function removed first
// element in array and assigns it to URL variable. If youtube doesn't exist in index, -1 declares that it doesn't exist; continue tells loop to start over
// at the top.  Line 17 strips URL portion using replace function, API only
// recognizes video ID.  Break keyword tells a loop to stop.  

function playNextSong(){
    while (currentPlaylist.length){
        var url= currentPlaylist.shift();
        if(url.indexOf("youtube")=== -1){
        // for now skipping all non-youtube URLs    
            continue;
        }
        playYouTube(url.replace("//youtube.com/watch?v=", ""));
        break;
    }
}

// Play YouTube video using YouTube API https://developers.google.com/youtube/iframe_api_reference#Loading_a_Video_Player
    
function playYouTube(videoId){
    if (player){
        player.loadVideoById(videoId);
    }
    else {
        player = new YT.Player('player', {
            height: '300',
            width: '600',
            videoId: videoId,
            events: {
                'onStateChange': onPlayerStateChange,
                'onError': onPlayerError
            }
        });
    }
}

// YouTube callback function, called when player changes state from playing to
// ended.  We used this function to play next song in playlist

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        console.log("video playing");
    }else if ( event.data == YT.PlayerState.ENDED){
        console.log("video stopped");
        playNextSong();
    }
}

// YouTube callback function, called if video fails to load...this is called to move on to the next song if there is an error with a particular video

function onPlayerError(event){
    console.log("video error");
    playNextSong();
}

// This function saves a copy of playlist into global variable, starts the whole playlist off.  

function playPlaylist(playlist){
    console.log(playlist);
    currentPlaylist=playlist;
    playNextSong();
    $("#overlay").show();
    $("#player-popup").show();
} 

// This stops the video and closes the modal popup window

function closePlayerPopup(){
    $("#overlay").hide();
    $("#player-popup").hide();
    player.stopVideo();
}

// inject YouTube API into our HTML, with directions from linked YouTube API.

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);