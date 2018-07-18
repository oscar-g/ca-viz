<template lang="pug">
  svg
    g.row(v-for="row in data")
      g.cell(v-for="state in row" v-bind:data-state="state")
    
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Grid extends Vue {
  @Prop() private data!: Uint8Array;
}
</script>
<style lang="stylus" scoped></style>
