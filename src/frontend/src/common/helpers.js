import {
  DOUGH_LIST,
  INGREDIENT_LIST,
  SAUCE_LIST,
  SIZE_LIST,
} from "@/common/constants";

/**
 * Определяет значение сущности по ее названию
 * @param name {string} Название сущности
 * @param map {array} Массив с возможными вариантами сущностей
 * @returns {string}
 */
export const getValueByName = (name = "", map = [{ label: "", value: "" }]) => {
  if (!Array.isArray(map))
    throw new Error('В параметре "map" ожидается массив');

  return map.find(({ label }) => label === name)?.value ?? "";
};

/**
 * Нормализация теста
 * @param item
 * @returns {*&{value: string}}
 */
export const normalizeDough = (item) => ({
  ...item,
  value: getValueByName(item.name, DOUGH_LIST),
});

/**
 * Нормализация ингредиента
 * @param item
 * @returns {*&{value: string}}
 */
export const normalizeIngredient = (item) => ({
  ...item,
  value: getValueByName(item.name, INGREDIENT_LIST),
});

/**
 * Нормализация соуса
 * @param item
 * @returns {*&{value: string}}
 */
export const normalizeSauce = (item) => ({
  ...item,
  value: getValueByName(item.name, SAUCE_LIST),
});

/**
 * Нормализация размера
 * @param item
 * @returns {*&{value: string}}
 */
export const normalizeSize = (item) => ({
  ...item,
  value: getValueByName(item.name, SIZE_LIST),
});

export default {
  getValueByName,
  normalizeDough,
  normalizeIngredient,
  normalizeSauce,
  normalizeSize,
};
