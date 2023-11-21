import { IGenerateOption } from "type";
import { generateTag } from "../generateTag/generateTag";

//гененирует option селектора
export const generateOption = ({ select, valute }: IGenerateOption) => {
  //дефолтные данные
  generateTag({
    element: select,
    text: "Выбрать валюту",
    key: "default",
  });
  //отрисовывает выпадающий список
  for (const key in valute) {
    generateTag({
      element: select,
      text: `${valute[key].ID}-${valute[key].Name}`,
      key,
    });
  }
};
