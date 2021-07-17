<template>
  <div
    :draggable="draggable"
    @dragstart.self="onDrag"
    @dragover.prevent
    @dragenter.prevent
  >
    <slot />
  </div>
</template>

<script>
import { DATA_TRANSFER_PAYLOAD, MOVE } from "@/common/constants";

/**
 * Компонент обертка наделяет внутренний компонент способность перетаскивать
 */
export default {
  name: "AppDrag",
  props: {
    /**
     * Данные переносимого объекта (компонента)
     */
    transferData: {
      type: Object,
      required: true,
    },
    /**
     * Указывает на возможность перетаскивания
     */
    draggable: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    onDrag({ dataTransfer }) {
      dataTransfer.effectAllowed = MOVE;
      dataTransfer.dropEffect = MOVE;
      dataTransfer.setData(
        DATA_TRANSFER_PAYLOAD,
        JSON.stringify(this.transferData)
      );
    },
  },
};
</script>
