

    
function playYouTube(videourl){
    var obj = {"video": {
        "value": "<iframe title='YouTube video player' type=\"text/html\"width='640'  height='390' src='https:"+videourl+"?autoplay=1' frameborder='0' allowFullScreen></iframe>"
        }}
        
    $("#player").html(obj.video.value);
    $("#player").on("onStateChange", function(state){
        console.log("onStateChange");
        if(state === 0){
            //play next song in playlist
            console.log("video has ended")
        }
    });
}

function playPlaylist(playlist){
    console.log(playlist);
    playYouTube(playlist[2].replace("watch?v=", "embed/"));
} 