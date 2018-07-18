<template lang="pug">
  footer(v-if="caption")
    p {{ caption }}
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class ExhibitFooter extends Vue {
  @Prop() private caption?: string;
}
</script>
<style lang="stylus" scoped></style>
