import "./style.css";
import { getData } from "./api";
import { generateSelect } from "./generateSelect/generateSelect";
import { IValuets } from "type";

//тестовые данные
// const mockValuets: Valuets = {
//   Date: "2023-08-26T11:30:00+03:00",
//   PreviousDate: "2023-08-25T11:30:00+03:00",
//   PreviousURL: "//www.cbr-xml-daily.ru/archive/2023/08/25/daily_json.js",
//   Timestamp: "2023-08-26T15:00:00+03:00",
//   Valute: {
//     AUD: {
//       ID: "R01010",
//       NumCode: "036",
//       CharCode: "AUD",
//       Nominal: 1,
//       Name: "Австралийский доллар",
//       Value: 60.7765,
//       Previous: 61.1622,
//     },
//     AZN: {
//       ID: "R01020A",
//       NumCode: "944",
//       CharCode: "AZN",
//       Nominal: 1,
//       Name: "Азербайджанский манат",
//       Value: 55.7128,
//       Previous: 55.5298,
//     },
//   },
// };

const start = async () => {
  try {
    const valuets: IValuets = await getData();
    // const valuets: Valuets = mockValuets;
    generateSelect(valuets);
  } catch (e) {
    //отлавиливает ошибку с запросом
    alert("Ошибка получения данных");
  }
};
start();
