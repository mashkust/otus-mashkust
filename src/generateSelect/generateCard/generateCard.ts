import { formatDate } from "./utils";
import { generateTag } from "../generateTag/generateTag";
import { IGenerateCard } from "type";

//генериурет карточку
export const generateCard = ({ valuets, value }: IGenerateCard) => {
  const valute = valuets.Valute;
  const [newDate, prevDate] = [
    new Date(valuets.Date),
    new Date(valuets.PreviousDate),
  ];

  const element = document.createElement("div");
  element.classList.add("card");

  //генерирует внутренний текст карточки
  [
    `${valute[value].ID} - ${valute[value].Name} (${value})`,
    `${formatDate(newDate)}-${valute[value].Value}`,
    `${formatDate(prevDate)}-${valute[value].Previous}`,
  ].forEach((text) => {
    generateTag({
      element,
      text,
    });
  });

  document.body.appendChild(element);
};
