const url = "https://www.cbr-xml-daily.ru/daily_json.js";

//get-запрос
export const getData = async () => {
  return fetch(url, { method: "GET" }).then((res) => res.json());
};
