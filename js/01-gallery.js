import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryOfImg = document.querySelector('.gallery');

// creating gallery
const itemEl = galleryItems
  .map(
    image => `<a class="gallery__link" href='${image.original}'
        <li><img src='${image.preview}' data-source='${image.original}' alt='${image.description}' loading="lazy" class="gallery__image" > </li></a>`
  )
  .join('');
galleryOfImg.insertAdjacentHTML('afterbegin', itemEl);

// event listener
galleryOfImg.addEventListener('click', onImgClick);

// creating modal with basicLightbox
function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const originalImg = event.target.dataset.source;

  // closing modal by ESC
  const lightboxEscConfig = {
    onShow: () => {
      document.addEventListener('keydown', onEscKeyPress);
    },
    onClose: () => {
      document.removeEventListener('keydown', onEscKeyPress);
    },
  };

  // creating modal
  const instance = basicLightbox.create(
    `
    <img
        class = "allery__image"
        src = '${originalImg}'
        data-source = ${galleryOfImg.original}
        alt= ${galleryOfImg.description}
        width = 800
        height = 600
    >`,
    lightboxEscConfig
  );
  instance.show();

  // closing modal by ESC
  function onEscKeyPress(event) {
    if (event.code === 'Escape' && instance.visible()) {
      instance.close();
    }
  }
}

console.log(galleryItems);
