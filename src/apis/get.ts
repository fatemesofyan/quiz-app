import { ICategory, IQustion } from "../interface/types";
import { BASE_URL_CATEGORY, BASE_URL_QUIZE } from "./consts";

export const getCategory = async (): Promise<ICategory[]> => {
  try {
    const response = await fetch(BASE_URL_CATEGORY);
    const result = await response.json();
    return result.trivia_categories;
  } catch (error) {
    console.error("Error fetching category data:", error);
    return [];
  }
};

export const getQuize = async ({ count, category, difficulty }: IQustion) => {
  try {
    const response = await fetch(
      `${BASE_URL_QUIZE}?amount=${count}&category=${category}&difficulty=${difficulty}`
    );
    console.log(response);
    const res = await response.json();

    console.log("API Response:", res);
    console.log("Results:", res.results);

    return res.results;
  } catch (error) {
    console.error("Error fetching quiz data:", error);
    return [];
  }
};
