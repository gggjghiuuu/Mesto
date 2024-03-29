function openPopup(popup) {
    popup.classList.add("popup_is-opened");
    document.addEventListener("keyup", handleEscape);
    document.addEventListener("click" , handleOverlay)
  }
  function closePopup(popup) {
    popup.classList.remove("popup_is-opened");
    document.removeEventListener("keyup", handleEscape);
    document.removeEventListener("click", handleOverlay);
  }
  function handleNewCardFormSubmit(evt) {
    evt.preventDefault();
    renderCard(
      popupNEwCardFormNameInput.value,
      popupNEwCardFormLinkInput.value,
      deleteCard,
      likeCard,
      scaleImage
    );
    closePopup(popupNewCard);
    popupNEwCardFormNameInput.value = "";
    popupNEwCardFormLinkInput.value = "";
  }
  function handleEditFormSubmit2(evt) {
    evt.preventDefault();
    
    profileName.textContent = formElementNameInputEdit.value
    jobName.textContent = formElementJobInputEdit.value;
    closePopup(popupEdit);
    formElementNameInputEdit.value = "";
    formElementJobInputEdit.value = "";
  }