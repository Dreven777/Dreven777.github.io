import config from './config.js';
import imageList from './imageList.js';
import {Button} from './button.js';

const container = document.getElementById('container');

class Slider {
    constructor(container, imageArray){
        this.mainBox = container;
        this.imageElement = [];
        this.imageArray = imageArray;
        this.currentImage = 0;
        this.pauseKey = null;
        this.pause = false;
        this.buttons = {
            next:   null,
            prev: null
        }
    }
    autoSlide(){
        if(config.autoSlide) setInterval(() => {
            if(!this.pause) this.slideImage('next')}
            , config.slideInterval);
    }
    create(){

        this.sliderElement = document.createElement('div');
        this.sliderElement.classList.add('slider');
        container.appendChild(this.sliderElement);

        this.buttons.prev = new Button(this.sliderElement, () => this.slideImage('prev'), "&#10148;", ['btn', 'btn-outline-secondary']);
        this.buttons.prev.classList.add('prev-key');

        this.imageContainer = document.createElement('div');
        this.imageContainer.id = 'image-container';
        this.sliderElement.appendChild(this.imageContainer);

        this.imageBox = document.createElement('div');
        this.imageBox.classList.add('image-list');
        this.imageBox.id = 'imageBox';
        this.imageContainer.appendChild(this.imageBox);

        this.buttons.next = new Button(this.sliderElement, () => this.slideImage('next'), "&#10148;", ['btn', 'btn-outline-secondary']);

        this.loadImageList();
        this.autoSlide();
    }
    loadImageList(){
        this.imageArray.forEach((element,i) => {
            this.imageElement[i] = document.createElement('img');
            this.imageElement[i].src = element;
            this.imageElement[i].draggable = false;
            this.imageBox.appendChild(this.imageElement[i]);
            this.imageElement[i].style.transform = `translateX(-${this.currentImage*100}%)`
            this.imageElement[i].style.left = `${i * 100}%`;
        });
    }
    createPauseKey(){
        if(!config.pauseKey) return;
        const pauseDiv = document.createElement('div');
        container.appendChild(pauseDiv);
        pauseDiv.classList.add('pause-button');


        this.pauseKey = new Button(pauseDiv, () => this.pauseSlide(), "PAUSE", ['btn', 'btn-outline-secondary']);
        this.pauseKey.id = 'pauseButton';
    }
    pauseSlide(){
        this.pause = !this.pause;
        this.updatePauseText();
    }
    updatePauseText(){
        if(!this.pause) this.pauseKey.textContent = 'PAUSE';
        else this.pauseKey.textContent = 'PLAY';
    }
    slideImage(type){
        switch(type){
            case 'prev':{
                if(this.currentImage > 0) this.currentImage --;
                else this.currentImage = this.imageElement.length - 1;
                break;
            }
            case 'next':{
                if(this.currentImage < (this.imageElement.length - 1)) this.currentImage ++;
                else this.currentImage = 0;
                break;
            } 
            default: {
                console.log('error');
                break;
            }
        }
        this.imageElement.forEach(
            (e) => {
                e.style.transform = `translateX(-${this.currentImage*100}%)`
            }
        )
        if(indicator) indicator.updateIndicator();
    }
}

class Indicator {
    constructor(container, imageArray){
        this.mainBox = container;
        this.imageArray = imageArray;
    }
    create(){
        if(config.showIndicator) {
            if(this.imageArray.length <= 0) return;
            const slideIndicator = document.createElement('div');
            slideIndicator.id = 'slideIndicator';
            container.appendChild(slideIndicator);
            this.imageArray.forEach((element,i) => {
                const el = document.createElement('div');
                el.id = `indicator_${i}`;
                el.classList.add('indicator-style');
                slideIndicator.appendChild(el);
            });
        }
        this.updateIndicator();
    }
    updateIndicator() {
        this.imageArray.forEach((element,i) => {
            const indicator = document.getElementById(`indicator_${i}`);
            if(slider.currentImage === i){
                indicator.style.background = 'black';
                indicator.style.scale = '1.2';
            }
            else {
                indicator.style.background = 'grey';
                indicator.style.scale = '1';
            }
        });
    }
}

const slider = new Slider(container, imageList);

const indicator = new Indicator(container, imageList);

slider.create();
indicator.create();
slider.createPauseKey();

createListeners();

function createListeners() {
    window.addEventListener('keydown', (e) => {
        if(e.keyCode === 39) slider.slideImage('next');
        else if(e.keyCode === 37) slider.slideImage('prev');
        else if(e.keyCode === 80) slider.pauseSlide();
    });
    window.addEventListener('touchstart', (e) => dragStart(e, 'touch'));
    window.addEventListener('touchend', (e) => dragEnd(e, 'touch'));
    window.addEventListener('mousedown', (e) => dragStart(e));
    window.addEventListener('mouseup', (e) => dragEnd(e));
    slider.imageBox.addEventListener('mouseover', (e) => mouseOver(e));
    slider.imageBox.addEventListener('mouseout', (e) => mouseOut(e));
}

function mouseOver(e, type = 'mouse'){
    slider.pause = true;
    slider.updatePauseText();
}

function mouseOut(e, type = 'mouse'){
    slider.pause = false;
    slider.updatePauseText();
    clientX = [];
}

let clientX = []; // [start, end]
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
    if(clientX[1] > clientX[0] + 100) slider.slideImage('prev');
    if(clientX[1] < clientX[0] - 100) slider.slideImage('next');
    clientX = [];
}