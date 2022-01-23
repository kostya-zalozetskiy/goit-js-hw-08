// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import 'simplelightbox/dist/simple-lightbox.min.css';
console.log(galleryItems);


const createImageListSimple = document.querySelector('.gallery')

const createGallerySimleMurkup = galleryItems.map(({ original, preview, description }) => 
        
    `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
      
        `
).join('');

// console.log(createGalleryMurkup);
createImageListSimple.insertAdjacentHTML('afterbegin', createGallerySimleMurkup);


var lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});