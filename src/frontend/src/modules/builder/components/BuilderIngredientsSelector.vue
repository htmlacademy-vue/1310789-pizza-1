<template>
  <div class="ingredients">
    <div v-if="sauces.length" class="ingredients__sauce">
      <p>Основной соус:</p>

      <RadioButton
        v-for="sauce in sauces"
        :key="sauce.value"
        group-name="sauce"
        :label="sauce.name"
        :value="sauce.value"
        :checked="checkedSauce"
        class="ingredients__input"
        @input="$emit('change-sauce', sauce.value)"
      />
    </div>

    <div class="ingredients__filling">
      <p>Начинка:</p>

      <ul class="ingredients__list">
        <li
          v-for="filling in fillings"
          :key="filling.value"
          class="ingredients__item"
        >
          <AppDrag
            :draggable="filling.count < maxCountFilling"
            :transfer-data="filling"
          >
            <SelectorItem :label="filling.name" :value="filling.value" />
          </AppDrag>

          <ItemCounter
            :value="filling.count"
            :min-value="minCountFilling"
            :max-value="maxCountFilling"
            class="ingredients__counter"
            @input="
              $emit('change-filling', { value: filling.value, count: $event })
            "
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import SelectorItem from "@/common/components/SelectorItem";
import ItemCounter from "@/common/components/ItemCounter";
import RadioButton from "@/common/components/RadioButton";
import {
  INGREDIENT_MAX_COUNT,
  INGREDIENT_MIN_COUNT,
  SAUCE_DEFAULT,
} from "@/common/constants";
import AppDrag from "@/common/components/AppDrag";

/**
 * Строит списки соуса и начинок
 */
export default {
  name: "BuilderIngredientsSelector",
  components: { AppDrag, RadioButton, ItemCounter, SelectorItem },
  props: {
    /**
     * Массив возможных вариантов соусов
     */
    sauces: {
      type: Array,
    },
    /**
     * Выбранный соус
     */
    checkedSauce: {
      type: String,
      default: SAUCE_DEFAULT,
    },
    /**
     * Массив возможных вариантов начинок
     */
    fillings: {
      type: Array,
    },
  },
  data: () => ({
    minCountFilling: INGREDIENT_MIN_COUNT,
    maxCountFilling: INGREDIENT_MAX_COUNT,
  }),
};
</script>

<style lang="scss">
.ingredients__sauce {
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  width: 100%;
  margin-bottom: 14px;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-right: 16px;
    margin-bottom: 10px;
  }
}

.ingredients__input {
  margin-right: 24px;
  margin-bottom: 10px;
}

.ingredients__filling {
  width: 100%;

  p {
    @include r-s16-h19;

    margin-top: 0;
    margin-bottom: 16px;
  }
}

.ingredients__list {
  @include clear-list;

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.ingredients__item {
  width: 100px;
  min-height: 40px;
  margin-right: 17px;
  margin-bottom: 35px;
}

.ingredients__counter {
  width: 54px;
  margin-top: 10px;
  margin-left: 36px;
}
</style>
