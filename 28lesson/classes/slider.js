const config = {
    "slideInterval": 2000,
    "autoSlide": true,
    "showIndicator": true,
    "pauseKey": true
};
const imageList = [
    "./images/list/1.jpg",
    "./images/list/2.jpg",
    "./images/list/3.jpg",
    "./images/list/4.jpg",
    "./images/list/5.jpg"
];

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
    create(){

        this.sliderElement = document.createElement('div');
        this.sliderElement.classList.add('slider');
        container.appendChild(this.sliderElement);

        this.buttons.prev = document.createElement('button');
        this.buttons.prev.id = 'prevButton';
        this.buttons.prev.type = 'button';
        this.buttons.prev.classList.add('btn', 'btn-outline-secondary', 'prev-key');
        this.buttons.prev.innerHTML  = "&#10148;"
        this.sliderElement.appendChild(this.buttons.prev);

        this.imageContainer = document.createElement('div');
        this.imageContainer.id = 'image-container';
        this.sliderElement.appendChild(this.imageContainer);

        this.imageBox = document.createElement('div');
        this.imageBox.classList.add('image-list');
        this.imageBox.id = 'imageBox';
        this.imageContainer.appendChild(this.imageBox);

        this.buttons.next = document.createElement('button');
        this.buttons.next.id = 'prevButton';
        this.buttons.next.type = 'button';
        this.buttons.next.classList.add('btn', 'btn-outline-secondary');
        this.buttons.next.innerHTML  = "&#10148;"
        this.sliderElement.appendChild(this.buttons.next);

        this.loadImageList();
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
        this.pauseKey = document.createElement('button');
        pauseDiv.appendChild(this.pauseKey)
        this.pauseKey.id = 'pauseButton';
        this.pauseKey.type = 'button';
        this.pauseKey.classList.add('btn', 'btn-outline-secondary');
        this.pauseKey.onclick = this.pauseSlide();
        this.pauseKey.textContent = 'PAUSE';
    }
    pauseSlide(){

    }
    updatePauseText(){
        
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