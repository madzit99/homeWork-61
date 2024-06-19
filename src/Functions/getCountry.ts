import axios from "axios";
import { countryInfo } from "../types";
import { COUNTRY_URL } from "../Constants";

export const getCountry = async (code: string) => {
  try {
    const response = await axios.get<countryInfo>(COUNTRY_URL + code);

    const info = response.data;
    const neighboursInfo = await Promise.all(
      info.borders?.map(async (border) => {
        const borders = await axios.get<countryInfo>(
          `https://restcountries.com/v2/alpha/${border}`
        );
        return borders.data.name;
      }) || ["Нет соседей"]
    );

    const countryInfoList = {
      name: info.name,
      capital: info.capital,
      population: info.population,
      borders: neighboursInfo,
      flag: info.flag,
    };

    return countryInfoList;
  } catch (error) {
    console.error("Error fetching country:", error);
  }
};
