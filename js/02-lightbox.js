import { galleryItems } from './gallery-items.js';
// Change code below this line
const makeGalleryItemMarkup = ({ preview, original, description }) => {
    return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
       <img
       style="display:block"
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
       />
     </a>
   </div>
       `;
   };

const makeGalleryMarkup = galleryItems.map(makeGalleryItemMarkup).join('');
console.log(galleryItems);

const galleryElements = document.querySelector('.gallery');

galleryElements.insertAdjacentHTML('beforeend', makeGalleryMarkup);

let gallery = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
  });

console.log(galleryItems);
