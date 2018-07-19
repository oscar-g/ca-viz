<template lang="pug">
  .caption
    .name {{ name }}
    .info(v-if="info") {{ info }}
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FigureCaption extends Vue {
  @Prop() private name!: string;
  @Prop() private info!: string;
}
</script>

<style lang="stylus">
  .caption
  
    & > *
      display inline-block

  .name
    &, &::after
      font-weight bold
    &::after
      content ":\00a0"
      display inline-block
</style>
