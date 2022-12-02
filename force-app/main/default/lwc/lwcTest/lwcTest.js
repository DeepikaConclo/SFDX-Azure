import { LightningElement } from 'lwc';
export default class LwcTest extends LightningElement {
  input = 'Code & Dogsss';
  changeHandler(event) {
    this.input = event.target.value;
  }
}