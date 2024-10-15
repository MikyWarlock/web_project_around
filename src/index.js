import "./styles/index.css";
import Card from "../scripts/Card.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import Section from "../scripts/Section.js";
import UserInfo from "../scripts/UserInfo.js";
import FormValidation from "../scripts/FormValidation.js";
import {
  template,
  initialCards,
  formConfig,
  profileAddButton,
  profileEditButton,
} from "../scripts/utils.js";

const addForm = new FormValidation(formConfig, "#add-popup__form");
addForm.enableValidation();

const editForm = new FormValidation(formConfig, "#edit-popup__form");
editForm.enableValidation();

const initialize = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item, template, {
        handleCardClick: (link, title) => {
          const popupWithImage = new PopupWithImage(
            "#image-popup",
            ".popup__image",
            ".popup__image-subtitile"
          );
          popupWithImage.setEventListeners();
          popupWithImage.open(link, title);
        },
      });
      const cardElement = card.generateCard();
      initialize.addItem(cardElement);
    },
  },
  ".gallery"
);

initialize.renderItems();

profileAddButton.addEventListener("click", () => {
  const addPopup = new PopupWithForm(
    {
      callbackFunction: (inputs) => {
        const card = new Card(
          { name: inputs[2].value, link: inputs[3].value },
          template,
          {
            handleCardClick: (link, title) => {
              const popupWithImage = new PopupWithImage(
                "#image-popup",
                ".popup__image",
                ".popup__image-subtitile"
              );
              popupWithImage.setEventListeners();
              popupWithImage.open(link, title);
            },
          }
        );
        const cardElement = card.generateCard();
        initialize.addItem(cardElement);
      },
    },
    "#add-popup"
  );
  addPopup.setEventListeners();
  addPopup.open();
});

profileEditButton.addEventListener("click", () => {
  const editPopup = new PopupWithForm(
    {
      callbackFunction: (inputs) => {
        const user = new UserInfo({
          name: inputs[0].value,
          job: inputs[1].value,
        });
        user.setUserInfo();
      },
    },
    "#edit-popup"
  );
  editPopup.setEventListeners();
  editPopup.open();
});
