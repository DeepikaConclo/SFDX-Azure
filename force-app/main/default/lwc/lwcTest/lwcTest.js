import { LightningElement } from 'lwc';
export default class LwcTest extends LightningElement {
  input = 'Code & Dogssssss';
  changeHandler(event) {
    this.input = event.target.value;
  }
}