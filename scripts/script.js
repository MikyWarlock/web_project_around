const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup__close-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const formName = document.querySelector(".form__name");
const formDescription = document.querySelector(".form__description");
const form = document.querySelector(".form");
const cardButton = document.querySelectorAll(".card__button");
const overlay = document.querySelector(".overlay");

formName.value = profileName.textContent;
formDescription.value = profileDescription.textContent;

editButton.addEventListener("click", function () {
  popup.classList.remove("popup_invisible");
  overlay.classList.add("overlay_active");
});

closePopup.addEventListener("click", function () {
  popup.classList.add("popup_invisible");
  overlay.classList.remove("overlay_active");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  profileName.textContent = formName.value;
  profileDescription.textContent = formDescription.value;
  popup.classList.add("popup_invisible");
  overlay.classList.remove("overlay_active");
});

cardButton.forEach((button) =>
  button.addEventListener("click", function () {
    if (button.classList.contains("card__button_active")) {
      button.classList.remove("card__button_active");
    } else {
      button.classList.add("card__button_active");
    }
  })
);
