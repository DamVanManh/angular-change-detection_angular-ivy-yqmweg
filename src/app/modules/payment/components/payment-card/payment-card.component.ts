import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit
} from "@angular/core";

@Component({
  selector: "app-payment-card",
  templateUrl: "./payment-card.component.html",
  styleUrls: ["./payment-card.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaymentCardComponent implements OnInit {
  @Input() paymentMethods: String[];
  @Input() name: string;

  constructor(private ref: ChangeDetectorRef) {}

  ngOnInit() {
    console.log(this.paymentMethods);
    // setInterval(() => {
    //   this.ref.detectChanges();
    // }, 10000);
  }
  ngOnChanges() {
    console.log(this.paymentMethods);
  }
}
