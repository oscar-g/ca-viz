<template lang="pug">
  .fig
    .fighead(v-if="title"): FigureHeader(v-bind:title="title")
    .figviz: Grid(v-bind:data="data", v-bind:theme="theme")
    .figcap(v-if="caption"): FigureCaption(v-bind="caption")
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
export default class Figure extends Vue {
  @Prop() private data!: Uint8Array[];
  @Prop() private theme?: Theme;
  @Prop() private title?: string;
  @Prop() private caption?: {
    name: string,
    info: string,
  };
}
</script>
