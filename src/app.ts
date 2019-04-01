import Vue from 'vue';
import {Component} from 'vue-property-decorator';

import SimpleDialog from './components/dialog';
Vue.use(SimpleDialog);

@Component({})
export default class App extends Vue {

  public click() {
    this.$simpleDialog.open();
  }
  public mounted() {
    // console.log('refs', this.$refs.dialog);
  }
}
