// Add imports above this line
import SimpleLightbox from "simplelightbox"; 
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';


(() => {
    const galleryItemsEl = document.querySelector(".gallery");
    const galleryMarkup = galleryItems
      .reduce((acc, { original, preview, description }) => 
      acc += `<a class="gallery__item" href="${original}">
              <img 
                  class="gallery__image"
                  src="${preview}"
                  alt="${description}" 
              />
          </a>`, "");

    galleryItemsEl.insertAdjacentHTML("beforeend", galleryMarkup);
  
    new SimpleLightbox(".gallery .gallery__item", {
      captionsData: "alt",
      captionDelay: 250,
    });
  })();
