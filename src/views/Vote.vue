<template>
  <div class="about">
    <h1>This is an Vote page</h1>
    <vote-component>
      <template v-slot:vote-option="{ option }">
        <base-button>{{ option }}</base-button>
      </template>
    </vote-component>
    <base-button>Test</base-button>
  </div>
</template>

<script>
import VoteComponent from '@/components/VoteComponent.vue';

export default {
  name: 'Vote',
  components: {
    VoteComponent,
  },
};
</script>
