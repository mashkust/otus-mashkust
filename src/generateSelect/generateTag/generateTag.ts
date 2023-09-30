import { IGenerateTag } from "type";

//гененирует теги по родительскому элементу и тексту
export const generateTag = ({ element, text, key }: IGenerateTag) => {
  let tag: HTMLParagraphElement | HTMLOptionElement =
    document.createElement("p");
  tag.textContent = text;
  //создает option
  if (key) {
    tag = document.createElement("option");
    tag.value = key;
    tag.textContent = text;
    if (key === "default") {
      ["selected", "disabled"].forEach((atr) => {
        tag.setAttribute(atr, atr);
      });
    }
  }
  element.appendChild(tag);
};
