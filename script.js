let player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('background-video', {
        videoId: 'lLVtHLq8KvY',
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: 'lLVtHLq8KvY',
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            mute: 1,
            start: getRandomStartTime(),
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

function getRandomStartTime() {
    const maxStart = 6000; // 100 minutes in seconds (video length)
    return Math.floor(Math.random() * maxStart);
}

function onPlayerReady(event) {
    event.target.playVideo();
}

function onPlayerStateChange(event) {
   
