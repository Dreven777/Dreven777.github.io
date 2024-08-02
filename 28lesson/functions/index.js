const slideIndicator = document.getElementById('slideIndicator');
const images = document.querySelectorAll('img')
let currentImage = 0;
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');
const pauseButton = document.getElementById('pauseButton');
const imageBox = document.getElementById('imageBox');
const container = document.getElementById('container');

let pause = false;

setInterval(() => {
    if(!pause) slideImage('next');
},2000);


loadIndicator();


function loadIndicator() {
    if(images.length === 0) return;
    for(let i = 0; i < images.length; i++){
        const el = document.createElement('div');
        el.id = `indicator_${i}`;
        el.classList.add('indicator-style');
        slideIndicator.appendChild(el);
    }
    //updateKeys();
    updateIndicator();
    window.addEventListener('keydown', (e) => pushKey(e));
    window.addEventListener('touchstart', (e) => dragStart(e, 'touch'));
    window.addEventListener('touchend', (e) => dragEnd(e, 'touch'));
    window.addEventListener('mousedown', (e) => dragStart(e));
    window.addEventListener('mouseup', (e) => dragEnd(e));
    imageBox.addEventListener('mouseover', (e) => mouseOver(e));
    imageBox.addEventListener('mouseout', (e) => mouseOut(e));
}
let clientX = []; // [start, end]

function mouseOver(e, type = 'mouse'){
    pause = true;
    updatePuseText();
}

function mouseOut(e, type = 'mouse'){
    pause = false;
    updatePuseText();
    clientX = [];
}
function dragStart(e, type = 'mouse'){
    if(e.type === 'touchstart') {
        clientX[0] = e.touches[0].clientX;
    }
    else clientX[0] = e.clientX;
}
function dragEnd(e, type = 'mouse'){
    if(e.type === 'touchend') {
        clientX[1] = e.changedTouches[0].clientX;
    }
    else clientX[1] = e.clientX;
    if(clientX[1] > clientX[0] + 100) slideImage('prev');
    if(clientX[1] < clientX[0] - 100) slideImage('next');
    clientX = [];
}

function pushKey(e){
    console.log(e.keyCode);
    if(e.keyCode === 39) slideImage('next');
    else if(e.keyCode === 37) slideImage('prev');
    else if(e.keyCode === 80) pauseSlide();
}

images.forEach((slide,index)=>{
    slide.style.left = `${index * 100}%`
})

function slideImage(type) {
    switch(type){
        case 'prev':{
            if(currentImage > 0){
            
                currentImage --;
                
            }
            else {
                currentImage = images.length - 1;
            }
            break;
        }
        case 'next':{
            if(currentImage < (images.length - 1)){
                currentImage ++;
            }
            else {
                currentImage = 0;
            }
            break;
        } 
        default: {
            console.log('error');
            break;
        }
    }

    images.forEach(
        (e) => {
            e.style.transform = `translateX(-${currentImage*100}%)`
        }
    )
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
    updatePuseText();
}
function updatePuseText(){
    if(!pause) pauseButton.textContent = 'PAUSE';
    else pauseButton.textContent = 'PLAY';
}
function updateKeys(){
    prevButton.style.visibility = currentImage <= 0 ? 'hidden' : 'visible';
    nextButton.style.visibility = currentImage >= images.length-1 ? 'hidden' : 'visible';
}