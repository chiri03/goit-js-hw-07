import { galleryItems } from "./gallery-items.js";

// console.log(galleryItems);

const galleryIMG = document.querySelector(".gallery");

galleryItems.forEach((element) => {
  galleryIMG.innerHTML += `<li class="gallery__item">
      <a class="gallery__link" href="${element.original}">
        <img
          class="gallery__image"
          src="${element.preview}"
          data-source="${element.original}"
          alt="${element.description}"
        />
      </a>
    </li>`;
});

galleryIMG.addEventListener("click", (event) => {
  event.preventDefault();
  const instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);

  instance.show();
  galleryIMG.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
      instance.close();
    }
  });
});
