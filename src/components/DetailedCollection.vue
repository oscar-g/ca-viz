<template lang="pug">
  .col
    .colhead: FigureHeader(v-bind:title="title")
    .colviz: .colfig(v-for="figure in figures")
      Grid(v-bind:data="figure.data", v-bind:theme="theme")
      FigureCaption(v-bind="figure.meta")
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import FigureHeader from './metadata/FigureHeader.vue';
import FigureCaption from './metadata/FigureCaption.vue';
import Grid from './cell/Grid.vue';
import Theme from './../interfaces/Theme';

@Component({
  components: {
    FigureHeader,
    FigureCaption,
    Grid,
  },
})
export default class DetailedCollection extends Vue {
  @Prop() private figures!: Array<{
    data: Uint8Array[],
    meta: {},
  }>;
  @Prop() private title!: string;
  @Prop() private theme?: Theme;
}
</script>
<style lang="stylus" scoped>
.colviz
  display flex
  flex-flow row wrap

  .colfig
    flex 1 1 0
</style>
