import { generateCard } from "./generateCard/generateCard";
import { deleteCard } from "./deleteCard/deleteCard";
import { generateOption } from "./generateOption/generateOption";

export const generateSelect = (valuets) => {
  const valute = valuets.Valute;

  const select = document.createElement("select");
  select.classList.add("select");

  if (valute && select) {
    generateOption({ select, valute });
    select.addEventListener("change", () => {
      deleteCard();
      generateCard({ valuets, value: select.value });
    });
    document.body.appendChild(select);
  } else {
    //отлавливает ошибку в полученных данных при попытке отрисовки
    alert("Ошибка при отрисовке");
  }
};
