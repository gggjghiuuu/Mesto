function addCard(name, link, deleteCard, likeCard, scaleImage) {
    const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
    const deleteButton = cardElement.querySelector(".card__delete-button");
    const likeButton = cardElement.querySelector(".card__like-button");
    const cardImage = cardElement.querySelector(".card__image");
    cardElement.querySelector(".card__image").src = link;
    cardElement.querySelector(".card__title").textContent = name;
    deleteButton.addEventListener("click", function (event) {
      deleteCard(event);
    });
    likeButton.addEventListener("click", function (event) {
      likeCard(event);
    });
  
    cardImage.addEventListener("click", function (event) {
      scaleImage(event);
    });
    return cardElement;
}
function deleteCard(event) {
    const listItem = event.target.closest(".places__item");
    listItem.remove();
}
function likeCard(event) {
    event.target.classList.toggle("card__like-button_is-active");
}
function renderCard(name, link, deleteCard, likeCard, scaleImage) {
    placesList.append(addCard(name, link, deleteCard, likeCard, scaleImage));
  }
  function scaleImage(event) {
    const card = event.target.closest(".card");
    popupImageOpenedPicture.src = event.target.src;
    popupImageOpenedText.textContent =
      card.querySelector(".card__title").textContent;
    openPopup(popupImage);
}
  