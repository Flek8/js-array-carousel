const photos = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const places = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const texts = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

let image = '';
let thumbnail = '';


for (let i = 0; i < photos.length; i++) {
    
    image += `<div class="photo">
                <img src="${photos[i]}">
                <div class="description">
                    <h2>${places[i]}</h2>
                    <p>${texts[i]}</p>
                </div>
              </div>`;

    thumbnail += `<div class="item">
                    <img src="${photos[i]}">
                  </div>`;
}

let photoContainer = document.querySelector('.photo-container');
photoContainer.innerHTML = image;

let itemsContainer = document.querySelector('.items-container');
itemsContainer.innerHTML = thumbnail;

let currentPhoto = 0;

let photo = document.getElementsByClassName('photo');
photo[currentPhoto].classList.add('active');

let photoSmall = document.getElementsByClassName('item');
photoSmall[currentPhoto].classList.add('active');

let arrowUp = document.querySelector('.arrow-up');
let arrowDown = document.querySelector('.arrow-down');


arrowUp.addEventListener('click',
    function() {
        if (currentPhoto != 0) {
            photo[currentPhoto].classList.remove('active');
            photoSmall[currentPhoto].classList.remove('active');
            currentPhoto = currentPhoto - 1;
            photo[currentPhoto].classList.add('active');
            photoSmall[currentPhoto].classList.add('active');
        } else {
            photo[currentPhoto].classList.remove('active');
            photoSmall[currentPhoto].classList.remove('active');
            currentPhoto = 4;
            photo[currentPhoto].classList.add('active');
            photoSmall[currentPhoto].classList.add('active');
        }
    }
    
);


arrowDown.addEventListener('click',
    function() {
        if (currentPhoto != 4) {
            photo[currentPhoto].classList.remove('active');
            photoSmall[currentPhoto].classList.remove('active');
            currentPhoto = currentPhoto + 1;
            photo[currentPhoto].classList.add('active');
            photoSmall[currentPhoto].classList.add('active');
        } else {
            photo[currentPhoto].classList.remove('active');
            photoSmall[currentPhoto].classList.remove('active');
            currentPhoto = 0;
            photo[currentPhoto].classList.add('active');
            photoSmall[currentPhoto].classList.add('active');
        }
    }
);

