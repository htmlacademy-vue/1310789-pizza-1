<template>
  <div>
    <AppLayout />
    <main class="content">
      <form action="#" method="post">
        <div class="content__wrapper">
          <AppTitle tag="h1" size="big">Конструктор пиццы</AppTitle>

          <div class="content__dough">
            <AppSheet title="Выберите тесто">
              <BuilderDoughSelector v-model="currentDough" :doughs="doughs" />
            </AppSheet>
          </div>

          <div class="content__diameter">
            <AppSheet title="Выберите размер">
              <BuilderSizeSelector v-model="currentSize" :sizes="sizes" />
            </AppSheet>
          </div>

          <div class="content__ingridients">
            <AppSheet title="Выберите ингредиенты">
              <BuilderIngredientsSelector
                :sauces="sauces"
                :checked-sauce="currentSauce"
                :fillings="ingredients"
                @change-sauce="currentSauce = $event"
                @change-filling="changeFilling"
              />
            </AppSheet>
          </div>

          <div class="content__pizza">
            <label class="input">
              <span class="visually-hidden">Название пиццы</span>
              <input
                v-model="pizzaName"
                type="text"
                name="pizza_name"
                placeholder="Введите название пиццы"
              />
            </label>

            <div class="content__constructor">
              <BuilderPizzaView
                :dough="currentDough"
                :sauce="currentSauce"
                :fillings="currentFillings"
                @drop="changeFilling"
              />
            </div>

            <div class="content__result">
              <p>Итого: {{ pizzaPrice }} ₽</p>
              <AppButton disabled>Готовьте!</AppButton>
            </div>
          </div>
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import AppLayout from "@/layouts/AppLayout";
import AppSheet from "@/common/components/AppSheet";
import AppTitle from "@/common/components/AppTitle";
import AppButton from "@/common/components/AppButton";
import BuilderIngredientsSelector from "@/modules/builder/components/BuilderIngredientsSelector";
import BuilderSizeSelector from "@/modules/builder/components/BuilderSizeSelector";
import BuilderDoughSelector from "@/modules/builder/components/BuilderDoughSelector";
import BuilderPizzaView from "@/modules/builder/components/BuilderPizzaView";

import { DOUGH_DEFAULT, SAUCE_DEFAULT, SIZE_DEFAULT } from "@/common/constants";
import pizza from "@/static/pizza.json";
import {
  normalizeDough,
  normalizeIngredient,
  normalizeSauce,
  normalizeSize,
} from "@/common/helpers";

export default {
  name: "Index",
  components: {
    AppLayout,
    BuilderPizzaView,
    AppButton,
    AppTitle,
    BuilderDoughSelector,
    AppSheet,
    BuilderSizeSelector,
    BuilderIngredientsSelector,
  },
  data: () => ({
    doughs: pizza.dough.map((item) => normalizeDough(item)),
    ingredients: pizza.ingredients.map((item) => normalizeIngredient(item)),
    sauces: pizza.sauces.map((item) => normalizeSauce(item)),
    sizes: pizza.sizes.map((item) => normalizeSize(item)),
    currentDough: DOUGH_DEFAULT,
    currentSauce: SAUCE_DEFAULT,
    currentSize: SIZE_DEFAULT,
    pizzaName: "",
  }),
  computed: {
    currentFillings() {
      return this.ingredients.filter(({ count }) => count > 0);
    },
    pizzaPrice() {
      const doughPrice =
        this.doughs.find(({ value }) => value === this.currentDough)?.price ??
        0;
      const saucePrice =
        this.sauces.find(({ value }) => value === this.currentSauce)?.price ??
        0;
      const fillingsPrice = this.currentFillings.reduce(
        (totalPrice, { count, price }) => {
          return totalPrice + count * price;
        },
        0
      );
      const multiplier =
        this.sizes.find(({ value }) => value === this.currentSize)
          ?.multiplier ?? 1;

      return (doughPrice + saucePrice + fillingsPrice) * multiplier;
    },
  },
  methods: {
    changeFilling({ count, value }) {
      this.ingredients = this.ingredients.map((item) => {
        if (item.value === value) {
          return { ...item, count };
        }
        return item;
      });
    },
  },
};
</script>
