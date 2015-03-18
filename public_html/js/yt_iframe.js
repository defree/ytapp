/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//Googlen iFrame API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '390',
    width: '640',
    videoId: '',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
    //player.loadVideoById(playQueue[0]);
    player.loadVideoById();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.

var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED && !done) {
        videoEnd();
        done = true;
    }
    
    if (event.data == YT.PlayerState.PLAYING && done) {
        done = false;
    }
    
    if (event.data == YT.PlayerState.BUFFERING) {
        event.target.setPlaybackQuality(quality[userPrefQual]);
    }
}

function stopVideo() {
    player.stopVideo();
}

function newVideo(id) {
    player.loadVideoById(id,0,'',quality[userPrefQual]);
}

function videoEnd() {
    newVideo("M7lc1UVf-VE",quality[userPrefQual]);
}
