const slideIndicator = document.getElementById('slideIndicator');
const images = document.querySelectorAll('img')
let currentImage = 0;
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const pauseButton = document.getElementById('pauseButton');
let pause = false;

setInterval(() => {
    if(!pause) nextImage();
},2000);


loadIndicator();


function loadIndicator(){
    if(images.length === 0) return;
    for(let i = 0; i < images.length; i++){
        const el = document.createElement('div');
        el.id = `indicator_${i}`;
        el.classList.add('indicator-style');
        slideIndicator.appendChild(el);
    }
    updateKeys();
    updateIndicator();
    window.addEventListener('keydown', (e) => pushKey(e));
}
function pushKey(e){
    console.log(e.keyCode);
    if(e.keyCode === 39) nextImage();
    else if(e.keyCode === 37) prevImage();
    else if(e.keyCode === 80) pauseSlide();
}

images.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})

const slideImage = ()=>{
    images.forEach(
        (e) => {
            e.style.transform = `translateX(-${currentImage*100}%)`
        }
    )
    updateKeys();
    updateIndicator();
}
function updateIndicator(){
    for(let i = 0; i < images.length; i++){
        const indicator = document.getElementById(`indicator_${i}`);
        if(currentImage === i){
            indicator.style.background = 'black';
            indicator.style.scale = '1.2';
        }
        else {
            indicator.style.background = 'grey';
            indicator.style.scale = '1';
        }
    }
    if(!pause) pauseButton.textContent = 'PAUSE';
    else pauseButton.textContent = 'PLAY';
}

function pauseSlide() {
    pause = !pause;
    if(!pause) pauseButton.textContent = 'PAUSE';
    else pauseButton.textContent = 'PLAY';
}
function updateKeys(){
    prevButton.style.visibility = currentImage <= 0 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentImage >= images.length-1 ? 'hidden' : 'visible';
}

function prevImage() {
    if(currentImage > 0){
        
        currentImage --;
        slideImage();
        
    }
}
function nextImage() {
    if(currentImage < (images.length - 1)){
        currentImage ++;
        slideImage();
    }
}