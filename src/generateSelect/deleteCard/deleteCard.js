//удаляет карточку при перерисовке
export const deleteCard = () => {
  const card = document.querySelector(".card");

  if (card) {
    card.remove();
  }
};
