var player;
var currentPlaylist;


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

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING) {
        console.log("video playing");
    }else if ( event.data == YT.PlayerState.ENDED){
        console.log("video stopped");
        playNextSong();
    }
}

function onPlayerError(event){
    console.log("video error");
    playNextSong();
}


function playPlaylist(playlist){
    console.log(playlist);
    currentPlaylist=playlist;
    playNextSong();
    $("#overlay").show();
    $("#player-popup").show();
} 

function closePlayerPopup(){
    $("#overlay").hide();
    $("#player-popup").hide();
    player.stopVideo();
}

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);