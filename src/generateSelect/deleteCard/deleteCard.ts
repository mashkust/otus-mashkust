//удаляет карточку при перерисовке
export const deleteCard = () => {
  const card = document.querySelector<HTMLDivElement>(".card");

  if (card) {
    card.remove();
  }
};
