const profileEditButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupCloseButton = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const formName = document.querySelector(".form__name");
const formDescription = document.querySelector(".form__description");
const form = document.querySelector(".form");
const cardButton = document.querySelectorAll(".card__button");
const overlay = document.querySelector(".overlay");

formName.value = profileName.textContent;
formDescription.value = profileDescription.textContent;

function openPopup(popup) {
  popup.classList.remove("popup_invisible");
  overlay.classList.add("overlay_active");
}

function closePopup(popup) {
  popup.classList.add("popup_invisible");
  overlay.classList.remove("overlay_active");
}

profileEditButton.addEventListener("click", function () {
  openPopup(popup);
});

popupCloseButton.addEventListener("click", function () {
  closePopup(popup);
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  closePopup(popup);
});

cardButton.forEach((button) =>
  button.addEventListener("click", function () {
    button.classList.toggle("card__button_active");
  })
);
