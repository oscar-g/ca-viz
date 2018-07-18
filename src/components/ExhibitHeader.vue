<template lang="pug">
  header
      h1(v-if="name") {{ name }}
      p(v-if="description") {{ description }}
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExhibitHeader extends Vue {
  @Prop() private name?: string;
  @Prop() private description?: string;
}
</script>
<style lang="stylus" scoped>
</style>
