<template lang="pug">
  p.caption
    span.name {{ name }}
    span.info(v-if="info") {{ info }}
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
    font-size small
    line-height 1
    margin 0.5em 0 0.5em 0

  .name
    &, &::after
      font-weight bold
    &::after
      content ":\00a0"
      display inline-block
</style>
