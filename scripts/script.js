const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const cardRemoveButton = document.querySelectorAll(".card__remove-button");
const editPopup = document.querySelector("#edit-popup");
const addPopup = document.querySelector("#add-popup");
const editPopupCloseButton = document.querySelector("#edit-popup__close-button");
const addPopupCloseButton = document.querySelector("#add-popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editPopupFormName = document.querySelector("#edit-popup__form-name");
const editPopupFormDescription = document.querySelector("#edit-popup__form-description");
const addPopupFormName = document.querySelector("#add-popup__form-name");
const addPopupFormLink = document.querySelector("#add-popup__form-link");
const editPopupForm = document.querySelector("#edit-popup__form");
const addPopupForm = document.querySelector("#add-popup__form");
const imagePopup = document.querySelector("#image-popup");
const popupMainImage = imagePopup.querySelector(".popup__image");
const imagePopupCloseButton = imagePopup.querySelector("#image-popup__close-button");
const overlay = document.querySelector(".overlay");
const gallery = document.querySelector(".gallery");
const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "./images/yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "./images/louise.jpg"
  },
  {
    name: "Ruas de Seoul",
    link: "./images/seoul.jpg"
  },
  {
    name: "Latemar",
    link: "./images/latemar.jpg"
  },
  {
    name: "Parque Nacional de Vanoise",
    link: "./images/vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "./images/braies.jpg"
  },
];

for(let i = 0; i < initialCards.length; i++) {
  displayCards(i);
}

editPopupFormName.value = profileName.textContent;
editPopupFormDescription.value = profileDescription.textContent;

profileEditButton.addEventListener("click", function () {
  openPopup(editPopup);
});

editPopupCloseButton.addEventListener("click", function () {
  closePopup(editPopup);
});

editPopupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  profileName.textContent = editPopupFormName.value;
  profileDescription.textContent = editPopupFormDescription.value;
  closePopup(editPopup);
});

profileAddButton.addEventListener("click", function () {
  openPopup(addPopup);
});

addPopupCloseButton.addEventListener("click", function () {
  closePopup(addPopup);
});

addPopupForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let cardTitle = addPopupFormName.value;
  let cardLink = addPopupFormLink.value;
  addCard(cardTitle, cardLink);
  closePopup(addPopup);
});

imagePopupCloseButton.addEventListener("click", function () {
  closePopup(imagePopup);
})

function openPopup(popup, imgLink = "") {
  if(imgLink !== "") {
    popupMainImage.src = imgLink;
  }

  popup.classList.remove("popup_invisible");
  overlay.classList.add("overlay_active");
}

function closePopup(popup) {
  popup.classList.add("popup_invisible");
  overlay.classList.remove("overlay_active");
}

function displayCards (index) {
  const cardsTemplate = document.querySelector("#card__template").content;
  const cardElement = cardsTemplate.querySelector(".card").cloneNode(true);
  const cardButton = cardElement.querySelector(".card__button");
  const cardRemoveButton = cardElement.querySelector(".card__remove-button");
  const cardImage = cardElement.querySelector(".card__image");

  cardImage.src = initialCards[index].link;
  cardImage.addEventListener("click", function () {
    openPopup(imagePopup, initialCards[index].link);
  });
  cardElement.querySelector(".card__title").textContent = initialCards[index].name;
  cardButton.addEventListener("click", function (e) {
      e.target.classList.toggle("card__button_active");
    });
  cardRemoveButton.addEventListener("click", function () {
    cardElement.remove();
  });

  gallery.append(cardElement);
}

function addCard (cardTitle, cardLink) {
  const cardsTemplate = document.querySelector("#card__template").content;
  const cardElement = cardsTemplate.querySelector(".card").cloneNode(true);
  const cardButton = cardElement.querySelector(".card__button");
  const cardRemoveButton = cardElement.querySelector(".card__remove-button");

  cardElement.querySelector(".card__image").src = cardLink;
  cardElement.querySelector(".card__title").textContent = cardTitle;
  cardButton.addEventListener("click", function (e) {
    e.target.classList.toggle("card__button_active");
  });
  cardRemoveButton.addEventListener("click", function () {
    cardElement.remove();
  });

  gallery.prepend(cardElement);
}
