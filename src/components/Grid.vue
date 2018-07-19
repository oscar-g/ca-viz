<template lang="pug">
  svg(v-bind="svgAttributes")
    g.r(v-for="(row, r) in data" )
      rect.c(v-for="(cellState, c) in row" v-bind="getCellAttributes(r, c)" v-bind:data-state="cellState")

</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Theme from './../interfaces/Theme';

@Component
export default class Grid extends Vue {
  @Prop() public data!: Uint8Array[];

  @Prop({
    type: Object,
    default: () => ({
      cellSize: 16,
      cellColor: {
        0: 'transparent',
        1: '#000',
      },
      gridBackgroundColor: '#fff',
      gridlineColor: '#000',
    }),
  }) public theme!: Theme;

  get length(): number {
    return (this.cellSize) * this.data.length;
  }

  get svgAttributes() {
    return {
      viewBox: `0 0 ${this.length} ${this.length}`,
      width: this.length,
    };
  }

  get cellSize(): number {
    return this.theme.cellSize
  }

  public getCellAttributes(rowIndex: number, cellIndex: number) {
    return {
      y: (rowIndex * this.cellSize),
      x: (cellIndex * this.cellSize),
      stoke: this.theme.gridlineColor,
      width: this.cellSize,
      height: this.cellSize,
      fill: this.theme.cellColor[ this.data[rowIndex][cellIndex] ],
    };
  }
}
</script>
<style lang="stylus">

</style>
