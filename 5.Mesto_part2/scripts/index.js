// @todo: Темплейт карточки

// @todo: DOM узлы

// @todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

const placesList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const profileName = document.querySelector(".profile__title");
const jobName = document.querySelector(".profile__description");
////////////////////////////////////////////////////////
const popupEdit = document.querySelector(".popup_type_edit");
const popupEditSaveButton = popupEdit.querySelector(".popup__button");
const popupEditOpenButton = document.querySelector(".profile__edit-button");
const popupEditCloseButton = popupEdit.querySelector(".popup__close");
////////////////////////////////////////////////////
const popupNewCard = document.querySelector(".popup_type_new-card");
const popupNewCardCloseButton = popupNewCard.querySelector(".popup__close");
const popupNewOpenCardButton = document.querySelector(".profile__add-button");
const popupNewCardSaveButton = popupNewCard.querySelector(".popup__button");
const popupNewCardInputName = popupNewCard.querySelector(
  ".popup__input_type_card-name"
);
const popupNewCardInputLink = popupNewCard.querySelector(
  ".popup__input_type_ulr"
);
//////////////////////////////////////////////////
const popupImage = document.querySelector(".popup_type_image");
const popupImageCloseButton = popupImage.querySelector(".popup__close");
const popupImageOpenedPicture = popupImage.querySelector(".popup__image");
const popupImageOpenedText = popupImage.querySelector(".popup__caption");
const popupNEwCardForm = popupNewCard.querySelector(".popup__form");
const popupNEwCardFormNameInput = popupNEwCardForm.querySelector(".popup__input_type_card-name");
const popupNEwCardFormLinkInput = popupNEwCardForm.querySelector(".popup__input_type_url");
const formElementEdit = popupEdit.querySelector(".popup__form");
const formElementNameInputEdit = formElementEdit.querySelector(".popup__input_type_name");
const formElementJobInputEdit = formElementEdit.querySelector(".popup__input_type_description");

initialCards.forEach(function (item) {
  renderCard(item.name, item.link, deleteCard, likeCard, scaleImage);
});

popupEditOpenButton.addEventListener("click", function () {
  openPopup(popupEdit);
});
popupEditCloseButton.addEventListener("click", function () {
  closePopup(popupEdit);
});

popupNewCardCloseButton.addEventListener("click", function () {
  closePopup(popupNewCard);
});
popupNewOpenCardButton.addEventListener("click", function () {
  openPopup(popupNewCard);
});

popupImageCloseButton.addEventListener("click", function () {
  closePopup(popupImage);
});

popupNEwCardForm.addEventListener("submit", handleNewCardFormSubmit);

formElementEdit.addEventListener("submit", handleEditFormSubmit2);

function handleEscape(evt){
  
  if(evt.key === "Escape"){
    const activePopup = document.querySelector(".popup_is-opened");
    closePopup(activePopup);
  }
}
function handleOverlay(evt){
  const activePopup = document.querySelector(".popup_is-opened");
  if(evt.target == activePopup){
    closePopup(activePopup);
  }
}


const showError = (input)=>{
  input.classList.add("popup__input_type-error");

}
const showSuccess = (input)=>{
  input.classList.add("popup__input_type-success");

}
const hideErrow = (input)=>{
  input.classList.remove("popup__input_type-error");
}
const isValid = ()=>{
  if(!formElementNameInputEdit.validity.valid)
  {
      showError(formElementNameInputEdit);
  }else{
      hideErrow(formElementNameInputEdit);
  }
}
formElementNameInputEdit.addEventListener("input" , isValid);