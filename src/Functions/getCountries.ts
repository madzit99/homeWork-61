import axios from "axios";
import { CountryType } from "../types";
import { BASE_URL } from "../Constants";

export const getCountries = async () => {
  try {
    const response = await axios.get<CountryType[]>(BASE_URL);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
