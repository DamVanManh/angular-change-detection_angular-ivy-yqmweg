import { Component, OnInit, VERSION } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html"
})
export class HomeComponent {
  counter = 12;
  name = "Angular " + this.counter;
  customer = {
    name: "Amit",
    age: 23
  };
  constructor() {}

  changeAngularVersion() {
    this.counter++;
    this.name = "Angular " + this.counter;
  }

  updateCustomer() {
    const max = 100;
    const min = 1;
    const newAge = Math.random() * (max - min) + min;
    this.customer.age = Math.floor(newAge);
  }
}
