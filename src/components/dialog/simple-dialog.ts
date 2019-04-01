import Vue from 'vue';
import {Component} from 'vue-property-decorator';

declare module 'vue/types/vue' {
  interface SimpleDialog {
    open: () => {};
  }
}

@Component({})
export default class SimpleDialog extends Vue {

  public isShow: boolean = false;
  public resolve() {
    //
  }
  public open() {
    this.isShow = true;
    return new Promise((resolve, reject) => {
      this.resolve = resolve;
    });
  }
}
