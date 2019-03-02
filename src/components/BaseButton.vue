<template>
  <button :class="{loading: loading}" :disabled="loading" v-bind="attrs" v-on="listeners">
    <slot></slot><span v-if="loading"> ...is loading</span>
  </button>
</template>

<script>
export default {
  inheritAttrs: false,
  name: '',
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    attrs() {
      return this.$attrs;
    },
    listeners() {
      return this.$listeners;
    },
  },
};
</script>
