<template>
  <label class="radio">
    <input
      type="radio"
      :name="groupName"
      :checked="checked === value"
      :value="value"
      class="visually-hidden"
      @change="$emit('input', value)"
    />
    <span v-html="label" />
  </label>
</template>

<script>
/**
 * Компонент радио-кнопки
 */
export default {
  name: "RadioButton",
  props: {
    /**
     * Текст рядом с радио-кнопкой
     */
    label: {
      required: true,
      type: String,
    },
    /**
     * Значение радио-кнопки
     */
    value: {
      required: true,
      type: String,
    },
    /**
     * Атрибут name объединяет радиокнопки в одну группу
     */
    groupName: {
      required: true,
      type: String,
    },
    /**
     * Значение радио-кнопки которую отметили
     * @model
     */
    checked: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.radio {
  cursor: pointer;

  span {
    @include r-s16-h19;

    position: relative;

    padding-left: 28px;

    &:before {
      @include p_center-v;

      display: block;

      box-sizing: border-box;
      width: 20px;
      height: 20px;

      content: "";
      transition: 0.3s;

      border: 1px solid $purple-400;
      border-radius: 50%;
      background-color: $white;
    }
  }

  &:hover {
    input:not(:checked):not(:disabled) + span {
      &:before {
        border-color: $purple-800;
      }
    }
  }

  input {
    &:checked + span {
      &:before {
        border: 6px solid $green-500;
      }
    }

    &:disabled {
      & + span {
        &:before {
          border-color: $purple-400;
          background-color: $silver-200;
        }
      }

      &:checked + span {
        &:before {
          border: 6px solid $purple-400;
        }
      }
    }
  }
}
</style>
