import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { PaymentLandingComponent } from "./components/payment-landing/payment-landing.component";
import { PaymentCardComponent } from "./components/payment-card/payment-card.component";
import { PaymentService } from "./services/payment.service";
import { PaymentRoutingModule } from "./payment-routing.module";

@NgModule({
  imports: [PaymentRoutingModule],
  declarations: [PaymentLandingComponent, PaymentCardComponent],
  providers: [PaymentService]
})
export class PaymentModule {}
