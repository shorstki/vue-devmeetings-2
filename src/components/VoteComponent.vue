<template>
  <div>
    <div v-for="option in opts" :key="option">
      <slot name="vote-option" :option="option">{{option}}</slot>
    </div>
  </div>
</template>

<script>
const opts = ['yes', 'dk', 'no'];
export default {
  data: () => ({
    opts,
  }),
};
</script>
