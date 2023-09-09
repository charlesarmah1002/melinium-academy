const videoContainer = document.querySelector('.video-container')
const button = videoContainer.querySelector('.playBtn')
const video = videoContainer.querySelector('video')
const icon = button.querySelector('i')
const hover = videoContainer.querySelector('.hover')

button.addEventListener('click', ()=>{
    if(video.paused){
        video.play();
        hover.classList.add('active');
        icon.classList.remove('fa-circle-play')
        icon.classList.add('fa-circle-pause')
    }else {
        video.pause();
        hover.classList.remove('active');
        icon.classList.remove('fa-circle-pause')
        icon.classList.add('fa-circle-play')
    }
})