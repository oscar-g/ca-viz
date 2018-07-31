<template lang="pug">
  .header
    .title {{ title }}
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class FigureHeader extends Vue {
  @Prop() private title!: string;
}
</script>
<style lang="stylus" scoped>
.header
  font-size large
  margin 0 0 1em
  line-height 1.5
</style>
