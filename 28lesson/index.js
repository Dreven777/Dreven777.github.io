const slideIndicator = document.getElementById('slideIndicator');
const images = document.querySelectorAll('img')
let currentImage = 0;
const nextButton = document.getElementById('nextButton');
const prevButton = document.getElementById('prevButton');

loadIndicator();


function loadIndicator(){
    if(images.length === 0) return;
    for(let i = 0; i < images.length; i++){
        const el = document.createElement('span');
        el.innerHTML = '&bull;'
        el.id = `indicator_${i}`;
        el.classList.add('indicator-style');
        slideIndicator.appendChild(el);
    }
    updateKeys();
    updateIndicator();
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
            indicator.style.color = 'red';
        }
        else {
            indicator.style.color = 'black';
        }
    }
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