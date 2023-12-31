// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.css';


// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector('.gallery');

function createMurkup(arr) {
  return arr
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item"> 
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}"/>
        </a>
      </li>`
    )
    .join('');
}
gallery.insertAdjacentHTML('beforeend', createMurkup(galleryItems));

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
