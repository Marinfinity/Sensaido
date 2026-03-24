function toggleVideo1() {
    const video = document.getElementById('video-element');
    var play = document.getElementById('play');

    if (video.paused) {
        video.play();
        play.textContent = "| |";
    } else {
        video.pause();
        play.textContent = "▶";
    }
}

function toggleVideo2() {
    const video = document.getElementById('video-element-pequeño3');
    var play = document.getElementById('play2');

    if (video.paused) {
        video.play();
        play.textContent = "| |";
    } else {
        video.pause();
        play.textContent = "▶";
    }
}

function playVideo() {
    const video = document.getElementById('video-element');
    video.play();
}

function pauseVideo() {
    const video = document.getElementById('video-element');
    video.pause();
}

function playVideoQueso() {
    const video = document.getElementById('video-element-pequeño2');
    video.play();
}

function pauseVideoQueso() {
    const video = document.getElementById('video-element-pequeño2');
    video.pause();
}

function playVideoExito() {
    const video = document.getElementById('video-element-pequeño3');
    video.play();
}

function pauseVideoExito() {
    const video = document.getElementById('video-element-pequeño3');
    video.pause();
}

function playVideoEntrevista() {
    const video = document.getElementById('video-element-pequeño4');
    video.play();
}

function pauseVideoEntrevista() {
    const video = document.getElementById('video-element-pequeño4');
    video.pause();
}
function playVideoDemo() {
    const video = document.getElementById('video-element-pequeño5');
    video.play();
}

function pauseVideoDemo() {
    const video = document.getElementById('video-element-pequeño5');
    video.pause();
}



