import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const galleryMarkup = createGalleryItemsMarkup(galleryItems)

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup)

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    }).join('')
}


galleryEl.addEventListener('click', onClick)


function onClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
`)

  instance.show();

  document.addEventListener('keydown', onEscape)

  function onEscape(event) {
    console.log(event.code)
    if (event.code === "Escape") {
      instance.close();
      document.removeEventListener('keydown', onEscape)
    }
  }
 
}

