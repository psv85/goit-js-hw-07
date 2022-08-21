import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryOfImg = document.querySelector('.gallery');

// creating gallery
const itemEl = galleryItems
  .map(
    image =>
      `<a class="gallery__item" href='${image.original}'>
        <img class="gallery__image" src='${image.preview}' alt='${image.description}' loading="lazy"> 
        </a>`
  )
  .join('');

galleryOfImg.insertAdjacentHTML('afterbegin', itemEl);

// event listener
galleryOfImg.addEventListener('click', findImgAlt);
function findImgAlt(event) {
  return console.log(event.target.alt);
}

// creating lightbox with SimpleLightbox
var lightbox = new SimpleLightbox('.gallery a', {
  captionType: 'attr',
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.on('show.SimpleLightbox');

console.log(galleryItems);
