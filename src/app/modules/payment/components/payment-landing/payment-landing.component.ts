import { Component, Input } from "@angular/core";
import { SharedService } from "../../../shared/services/shared.service";

@Component({
  selector: "app-payment-landing",
  templateUrl: "./payment-landing.component.html",
  styleUrls: ["./payment-landing.component.css"]
})
export class PaymentLandingComponent {
  @Input() name?: string;
  loading = false;
  methodCounter = 1;
  angularCounter = 11;
  paymentMethods = ["NetBanking", "Credit Card "];
  constructor(private sharedService: SharedService) {
    console.log("in payment landing");
    console.log('shared service counter ' + this.sharedService.counter);
  }

  changeMe() {
    this.name = "Angular " + this.angularCounter++;
  }
  addPaymentMethods(): void {
    this.paymentMethods.push("New Payment Method " + this.methodCounter++);
  }

  ngOnChanges() {
    console.log("on changes");
    console.log(this.name);
  }
  ngOnInit() {
    console.log("on init");
    console.log(this.name);
    setTimeout(() => {
      this.loading = true;
    }, 5000);
  }
  // ngDoCheck() {
  //   console.log("do check");
  //   console.log(this.name);
  // }
  // ngAfterContentInit() {
  //   console.log("after content init");
  //   console.log(this.name);
  // }
  // ngAfterContentChecked() {
  //   console.log("after content checked");
  //   console.log(this.name);
  // }
  ngAfterViewInit() {
    console.log("after view init");
    console.log(this.name);
  }
  ngAfterViewChecked() {
    console.log("after view checked");
    console.log(this.name);
  }
  ngOnDestroy() {
    console.log("on destroy");
    console.log(this.name);
  }
}
