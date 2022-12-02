import { LightningElement } from 'lwc';
export default class LwcTest extends LightningElement {
  input = 'Code & Dogss';
  changeHandler(event) {
    this.input = event.target.value;
  }
}