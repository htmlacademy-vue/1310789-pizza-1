<template>
  <div class="counter">
    <button
      type="button"
      :disabled="isMinusDisabled"
      class="counter__button counter__button--minus"
      :class="{ 'counter__button--disabled': isMinusDisabled }"
      @click="$emit('input', value - 1)"
    >
      <span class="visually-hidden">Меньше</span>
    </button>
    <input
      type="text"
      name="counter"
      :value="value"
      class="counter__input"
      @input="onFieldInput"
    />
    <button
      type="button"
      :disabled="isPlusDisabled"
      class="counter__button counter__button--plus"
      :class="{ 'counter__button--disabled': isPlusDisabled }"
      @click="$emit('input', +value + 1)"
    >
      <span class="visually-hidden">Больше</span>
    </button>
  </div>
</template>

<script>
import {
  INGREDIENT_DEFAULT_COUNT,
  INGREDIENT_MAX_COUNT,
  INGREDIENT_MIN_COUNT,
} from "@/common/constants";

export default {
  name: "ItemCounter",
  props: {
    /**
     * Значение поля ввода
     * @model
     */
    value: {
      type: [String, Number],
      default: 0,
    },
    /**
     * Минимальное значение в поле ввода
     */
    minValue: {
      type: Number,
      default: INGREDIENT_MIN_COUNT,
    },
    /**
     * Максимальное значение в поле ввода
     */
    maxValue: {
      type: Number,
      default: INGREDIENT_MAX_COUNT,
    },
  },
  computed: {
    isMinusDisabled() {
      return typeof this.minValue === "number" && this.minValue >= +this.value;
    },
    isPlusDisabled() {
      return typeof this.maxValue === "number" && this.maxValue <= +this.value;
    },
  },
  methods: {
    onFieldInput(event) {
      const value = parseFloat(event.target.value);

      if (Number.isNaN(value))
        return this.$emit("input", INGREDIENT_DEFAULT_COUNT);
      if (value < this.minValue) return this.$emit("input", this.minValue);
      if (value > this.maxValue) return this.$emit("input", this.maxValue);

      return this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.counter {
  display: flex;

  justify-content: space-between;
  align-items: center;
}

.counter__button {
  $el: &;
  $size_icon: 50%;

  position: relative;

  display: block;

  width: 16px;
  height: 16px;
  margin: 0;
  padding: 0;

  cursor: pointer;
  transition: 0.3s;

  border: none;
  border-radius: 50%;
  outline: none;

  &--minus {
    background-color: $purple-100;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $black;
    }

    &:hover:not(:active):not(#{$el}--disabled) {
      background-color: $purple-200;
    }

    &:active:not(#{$el}--disabled) {
      background-color: $purple-300;
    }

    &:focus:not(#{$el}--disabled) {
      box-shadow: $shadow-regular;
    }

    &#{$el}--disabled {
      cursor: default;

      &::before {
        opacity: 0.1;
      }
    }
  }

  &--plus {
    background-color: $green-500;

    &::before {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";

      border-radius: 2px;
      background-color: $white;
    }

    &::after {
      @include p_center-all;

      width: $size_icon;
      height: 2px;

      content: "";
      transform: translate(-50%, -50%) rotate(90deg);

      border-radius: 2px;
      background-color: $white;
    }

    &:hover:not(:active):not(#{$el}--disabled) {
      background-color: $green-400;
    }

    &:active:not(#{$el}--disabled) {
      background-color: $green-600;
    }

    &:focus:not(#{$el}--disabled) {
      box-shadow: $shadow-regular;
    }

    &#{$el}--disabled {
      cursor: default;

      opacity: 0.3;
    }
  }

  &--orange {
    background-color: $orange-200;

    &:hover:not(:active):not(#{$el}--disabled) {
      background-color: $orange-100;
    }

    &:active:not(#{$el}--disabled) {
      background-color: $orange-300;
    }
  }
}

.counter__input {
  @include r-s14-h16;

  box-sizing: border-box;
  width: 22px;
  margin: 0;
  padding: 0 3px;

  text-align: center;

  color: $black;
  border: none;
  border-radius: 10px;
  outline: none;
  background-color: transparent;

  &:focus {
    box-shadow: inset $shadow-regular;
  }
}
</style>
