<template lang="pug">
  div.single
    ExhibitHeader(v-bind:name="name" v-bind:description="description" )
    section:
      pre {{ cells }}
      Grid(v-bind:data="data")
    ExhibitFooter(v-bind:caption="caption")
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import ExhibitHeader from './ExhibitHeader.vue';
import ExhibitFooter from './ExhibitFooter.vue';

@Component({
  components: {
    ExhibitHeader,
    ExhibitFooter,
  },
})
export default class SingleExhibit extends Vue {
  @Prop() private name?: string;
  @Prop() private description?: string;
  @Prop() private caption?: string;
  @Prop() private data!: Uint8Array[];
}
</script>
<style lang="stylus" scoped></style>
