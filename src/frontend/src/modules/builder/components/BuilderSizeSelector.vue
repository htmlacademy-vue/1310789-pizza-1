<template>
  <div class="diameter">
    <label
      v-for="size in sizes"
      :key="size.value"
      :class="['diameter__input', `diameter__input--${size.value}`]"
    >
      <input
        type="radio"
        name="diameter"
        :value="size.value"
        :checked="size.value === value"
        class="visually-hidden"
        @change="$emit('input', size.value)"
      />
      <span>{{ size.name }}</span>
    </label>
  </div>
</template>

<script>
/**
 * Строит список для выбора размера пиццы
 */
export default {
  name: "BuilderSizeSelector",
  props: {
    /**
     * Массив возможных размеров пиццы
     */
    sizes: {
      type: Array,
      default: () => [],
    },
    /**
     * Выбранный размер
     * @model
     */
    value: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.diameter {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.diameter__input {
  margin-right: 8.7%;
  margin-bottom: 20px;
  padding-top: 7px;
  padding-bottom: 6px;

  cursor: pointer;

  span {
    @include r-s16-h19;

    position: relative;

    padding-left: 46px;

    &::before {
      @include p_center_v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-color: $green-100;
      background-image: url("~@/assets/img/diameter.svg");
      background-repeat: no-repeat;
      background-position: center;
    }
  }

  &:nth-child(3n) {
    margin-right: 0;
  }

  &--small {
    span::before {
      background-size: 18px;
    }
  }

  &--normal {
    span::before {
      background-size: 29px;
    }
  }

  &--big {
    span::before {
      background-size: 100%;
    }
  }

  &:hover {
    span::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + span::before {
      box-shadow: $shadow-large;
    }
  }
}
</style>
