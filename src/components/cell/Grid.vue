<template lang="pug">
    svg.grid(v-bind="svgAttributes")
      rect.b(v-bind="getBorderAttributes()")
      g(v-bind:transform="gridTransform")
        g.r(v-for="(row, r) in data")
          rect.c(v-for="(cellState, c) in row" v-bind="getCellAttributes(r, c)" v-bind:data-state="cellState")
        g
          line.l.lh(v-for="(_, r) in Array(data.length)" v-if="r > 0" v-bind="getHorizontalLineAttributes(r)")
          line.l.lv(v-for="(_, r) in Array(data.length)" v-if="r > 0" v-bind="getVerticalLineAttributes(r)")
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Theme from './../../interfaces/Theme';
import themes from './../../themes';

@Component
export default class Grid extends Vue {
  @Prop() public data!: Uint8Array[];

  @Prop({
    type: Object,
    default: (): Theme => themes.classic,
  }) public theme!: Theme;

  get cellSize(): number {
    return this.theme.cellSize;
  }

  get innerWidth(): number {
    return (this.cellSize) * this.data.length;
  }

  get totalWidth(): number {
    return this.innerWidth + (this.theme.borderWidth * 2);
  }

  get svgAttributes() {
    return {
      viewBox: `0 0 ${this.totalWidth} ${this.totalWidth}`,
      width: this.totalWidth,
    };
  }

  get gridTransform(): string {
    return `translate(${this.theme.borderWidth},${this.theme.borderWidth})`;
  }

  public getCellAttributes(rowIndex: number, cellIndex: number) {
    return {
      y: (rowIndex * this.cellSize),
      x: (cellIndex * this.cellSize),
      width: this.cellSize,
      height: this.cellSize,
      fill: this.theme.cellColor[ this.data[rowIndex][cellIndex] ],
    };
  }

  public getHorizontalLineAttributes(rowIndex: number) {
    return {
      stroke: this.theme.gridlineColor,
      x1: 0,
      x2: this.innerWidth,
      y1: (rowIndex * this.cellSize),
      y2: (rowIndex * this.cellSize),
    };
  }

  public getVerticalLineAttributes(rowIndex: number) {
    return {
      stroke: this.theme.gridlineColor,
      y1: 0,
      y2: this.innerWidth,
      x1: (rowIndex * this.cellSize),
      x2: (rowIndex * this.cellSize),
    };
  }

  public getBorderAttributes(vertical: boolean = false, last: boolean = false) {
    const lineFn = vertical ?  this.getVerticalLineAttributes : this.getHorizontalLineAttributes;
    const rowIndex = last ? this.data.length : 0;
    const line = lineFn(rowIndex);
    const mod = last ? (vertical ? {
      // y1: line.y1 + theme.borderWidth,
      y2: line.y2 + this.theme.borderWidth,
    } : {
      // x1: line.x1 + theme.borderWidth,
      x2: line.x2 + this.theme.borderWidth,
    }) : {};

    return Object.assign(line, mod, {
      'fill': 'none',
      'width': this.totalWidth,
      'height': this.totalWidth,
      'stroke': this.theme.borderColor,
      'stroke-width': this.theme.borderWidth * 2,
    });
  }
}
</script>
<style lang="stylus">
.grid
  display block
</style>
