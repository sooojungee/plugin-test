import Vue from 'vue';
import SimpleDialog from './simple-dialog.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $simpleDialog: SimpleDialog;
  }
}

export default {
  install(vue: typeof Vue, options: any) {

    // hot reload 방지
    if (Vue.prototype.$simpleDialog !== undefined) {
      Vue.prototype.$simpleDialog.destroy();
    }

    const instance = new SimpleDialog();
    instance.$mount(document.body.appendChild(document.createElement('div')));
    Vue.prototype.$simpleDialog = instance;
  },
};
