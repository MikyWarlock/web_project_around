import Card from "./Card.js";
import FormValidation from "./FormValidation.js";
import {
  setEventListeners,
  editPopupForm,
  addPopupForm,
  template,
  gallery,
  initialCards,
  formConfig,
} from "./utils.js";

const addForm = new FormValidation(formConfig, addPopupForm);
addForm.enableValidation();

const editForm = new FormValidation(formConfig, editPopupForm);
editForm.enableValidation();

for (const cards of initialCards) {
  const card = new Card(cards, template);
  card.generateCard(gallery);
}

setEventListeners();
