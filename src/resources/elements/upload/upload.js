import {bindable} from 'aurelia-framework';

export class Upload {
  @bindable value;

  constructor(){
    this.value = 'upload Announcements'
  }

  valueChanged(newValue, oldValue) {

  }
}
