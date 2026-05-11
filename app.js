const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = [
    'videos/hero1.mp4',
    'videos/hero2.mp4',
    'videos/hero3.mp4',
    'videos/hero4.mp4'
];

let index = 0;

nextButton.addEventListener('click', function () {

    index++;

    if(index >= movieList.length){
        index = 0;
    }

    video.src = movieList[index];
    video.play();

});

const trailerBtn = document.getElementById("trailerBtn");
const trailerModal = document.getElementById("trailerModal");
const closeTrailer = document.getElementById("closeTrailer");
const trailerVideo = document.getElementById("trailerVideo");

trailerBtn.addEventListener("click", () => {

    trailerModal.style.display = "flex";

    trailerVideo.currentTime = 0;

    trailerVideo.load();

    setTimeout(() => {
        trailerVideo.play();
    }, 200);

});

closeTrailer.addEventListener("click", () => {

    trailerModal.style.display = "none";

    trailerVideo.pause();
    trailerVideo.currentTime = 0;

});
