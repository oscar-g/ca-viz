<template lang="pug">
  .col
    .colhead: FigureHeader(v-bind:title="title")
    .colviz: .colfig(v-for="data in figures")
      Grid(v-bind:data="data", v-bind:theme="theme")
    .colcap: FigureCaption(v-bind="caption")
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
export default class SimpleCollection extends Vue {
  @Prop() private figures!: Uint8Array[][];
  @Prop() private title!: string;
  @Prop() private caption!: {
    name: string,
    info: string,
  };
  @Prop() private theme?: Theme;
}
</script>