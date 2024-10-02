import Card from "./Card.js";
const overlay = document.querySelector(".overlay");
const profileEditButton = document.querySelector(".profile__edit-button");
const profileAddButton = document.querySelector(".profile__add-button");
const editPopup = document.querySelector("#edit-popup");
const addPopup = document.querySelector("#add-popup");
const editPopupCloseButton = document.querySelector(
  "#edit-popup__close-button"
);
const addPopupCloseButton = document.querySelector("#add-popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const editPopupFormName = document.querySelector("#form__name");
const editPopupFormDescription = document.querySelector("#form__description");
const addPopupFormName = document.querySelector("#form__post-title");
const addPopupFormLink = document.querySelector("#form__link");
const imagePopup = document.querySelector("#image-popup");
const imagePopupCloseButton = imagePopup.querySelector(
  "#image-popup__close-button"
);
const editPopupForm = document.querySelector("#edit-popup__form");
const addPopupForm = document.querySelector("#add-popup__form");
const gallery = document.querySelector(".gallery");
const template = document.querySelector("#card__template");
const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg",
  },
  {
    name: "Parque Nacional de Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg",
  },
  {
    name: "Ruas de Seoul",
    link: "./images/seoul.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
  },
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
  },
];

const formConfig = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  inactiveButtonClass: "form__submit_inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

function openPopup(popup, imgLink = "") {
  if (imgLink !== "") {
    const popupMainImage = document.querySelector(".popup__image");
    popupMainImage.src = imgLink;
  }

  popup.classList.remove("popup_invisible");
  overlay.classList.add("overlay_active");
}

function closePopup(popup) {
  popup.classList.add("popup_invisible");
  overlay.classList.remove("overlay_active");
}

function setEventListeners() {
  editPopupFormName.value = profileName.textContent;
  editPopupFormDescription.value = profileDescription.textContent;

  profileEditButton.addEventListener("click", function () {
    openPopup(editPopup);
    overlay.addEventListener("click", function () {
      closePopup(editPopup);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closePopup(editPopup);
      }
    });
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
    overlay.addEventListener("click", function () {
      closePopup(addPopup);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closePopup(addPopup);
      }
    });
  });

  addPopupCloseButton.addEventListener("click", function () {
    closePopup(addPopup);
  });

  addPopupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const cardData = {
      name: addPopupFormName.value,
      link: addPopupFormLink.value,
    };
    const card = new Card(cardData, template);
    card.generateCard(gallery);
    closePopup(addPopup);
  });

  imagePopupCloseButton.addEventListener("click", function () {
    closePopup(imagePopup);
  });
}

export {
  openPopup,
  closePopup,
  setEventListeners,
  overlay,
  editPopupForm,
  addPopupForm,
  template,
  gallery,
  initialCards,
  formConfig,
};
