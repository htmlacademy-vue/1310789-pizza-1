<template>
  <AppDrop @drop="$emit('drop', $event)">
    <div class="pizza" :class="pizzaClassName">
      <div class="pizza__wrapper">
        <template v-for="filling in fillings">
          <div
            :key="filling.value"
            :class="['pizza__filling', `pizza__filling--${filling.value}`]"
          />
          <div
            v-if="filling.count > 1"
            :key="`${filling.value}-second`"
            :class="[
              'pizza__filling',
              'pizza__filling--second',
              `pizza__filling--${filling.value}`,
            ]"
          />
          <div
            v-if="filling.count > 2"
            :key="`${filling.value}-third`"
            :class="[
              'pizza__filling',
              'pizza__filling--third',
              `pizza__filling--${filling.value}`,
            ]"
          />
        </template>
      </div>
    </div>
  </AppDrop>
</template>

<script>
import AppDrop from "@/components/AppDrop";

/**
 * Строит отображение пиццы
 */
export default {
  name: "BuilderPizzaView",
  components: { AppDrop },
  props: {
    /**
     * Тип теста
     */
    dough: {
      type: String,
      validator: (value) => ["light", "large"].indexOf(value) !== -1,
    },
    /**
     * Тип соуса
     */
    sauce: {
      type: String,
      validator: (value) => ["tomato", "creamy"].indexOf(value) !== -1,
    },
    /**
     * Список начинок
     */
    fillings: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    pizzaClassName() {
      const doughSize = { light: "small", large: "big" }[this.dough];

      return `pizza--foundation--${doughSize}-${this.sauce}`;
    },
  },
};
</script>

<style lang="scss">
.pizza {
  position: relative;

  display: block;

  box-sizing: border-box;
  width: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &--foundation--big-creamy {
    background-image: url("~@/assets/img/foundation/big-creamy.svg");
  }

  &--foundation--big-tomato {
    background-image: url("~@/assets/img/foundation/big-tomato.svg");
  }

  &--foundation--small-creamy {
    background-image: url("~@/assets/img/foundation/small-creamy.svg");
  }

  &--foundation--small-tomato {
    background-image: url("~@/assets/img/foundation/small-tomato.svg");
  }
}

.pizza__wrapper {
  width: 100%;
  padding-bottom: 100%;
}

.pizza__filling {
  position: absolute;
  top: 0;
  left: 0;

  display: block;

  width: 100%;
  height: 100%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;

  &--second {
    transform: rotate(45deg);
  }

  &--third {
    transform: rotate(-45deg);
  }

  &--ananas {
    background-image: url("~@/assets/img/filling-big/ananas.svg");
  }

  &--bacon {
    background-image: url("~@/assets/img/filling-big/bacon.svg");
  }

  &--blue_cheese {
    background-image: url("~@/assets/img/filling-big/blue_cheese.svg");
  }

  &--cheddar {
    background-image: url("~@/assets/img/filling-big/cheddar.svg");
  }

  &--chile {
    background-image: url("~@/assets/img/filling-big/chile.svg");
  }

  &--ham {
    background-image: url("~@/assets/img/filling-big/ham.svg");
  }

  &--jalapeno {
    background-image: url("~@/assets/img/filling-big/jalapeno.svg");
  }

  &--mozzarella {
    background-image: url("~@/assets/img/filling-big/mozzarella.svg");
  }

  &--mushrooms {
    background-image: url("~@/assets/img/filling-big/mushrooms.svg");
  }

  &--olives {
    background-image: url("~@/assets/img/filling-big/olives.svg");
  }

  &--onion {
    background-image: url("~@/assets/img/filling-big/onion.svg");
  }

  &--parmesan {
    background-image: url("~@/assets/img/filling-big/parmesan.svg");
  }

  &--salami {
    background-image: url("~@/assets/img/filling-big/salami.svg");
  }

  &--salmon {
    background-image: url("~@/assets/img/filling-big/salmon.svg");
  }

  &--tomatoes {
    background-image: url("~@/assets/img/filling-big/tomatoes.svg");
  }
}
</style>
