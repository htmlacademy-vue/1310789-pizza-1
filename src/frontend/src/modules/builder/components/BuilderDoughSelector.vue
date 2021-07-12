<template>
  <div class="dough">
    <label
      v-for="dough in doughs"
      :key="dough.value"
      :class="['dough__input', `dough__input--${dough.value}`]"
    >
      <input
        type="radio"
        name="dough"
        :value="dough.value"
        :checked="dough.value === value"
        class="visually-hidden"
        @change="$emit('input', dough.value)"
      />
      <b>{{ dough.name }}</b>
      <span>{{ dough.description }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: "BuilderDoughSelector",
  props: {
    doughs: {
      type: Array,
      default: () => [],
    },
    /**
     * @model
     */
    value: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.dough {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.dough__input {
  position: relative;

  margin-right: 8%;
  margin-bottom: 20px;
  padding-left: 50px;

  cursor: pointer;

  b {
    @include r-s16-h19;

    &::before {
      @include p_center-v;

      width: 36px;
      height: 36px;

      content: "";
      transition: 0.3s;

      border-radius: 50%;
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
  }

  span {
    @include l-s11-h13;

    display: block;
  }

  &--light {
    b {
      &::before {
        background-image: url("~@/assets/img/dough-light.svg");
      }
    }
  }

  &--large {
    b {
      &::before {
        background-image: url("~@/assets/img/dough-large.svg");
      }
    }
  }

  &:hover {
    b::before {
      box-shadow: $shadow-regular;
    }
  }

  input {
    &:checked + b::before {
      box-shadow: $shadow-large;
    }
  }
}
</style>
