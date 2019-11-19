import "vue-tsx-support/enable-check";
import "vue-tsx-support/options/allow-unknown-props";
import "vue-tsx-support/options/allow-element-unknown-attrs";
import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
  }
}
