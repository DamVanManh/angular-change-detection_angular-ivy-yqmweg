import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PaymentLandingComponent } from "./components/payment-landing/payment-landing.component";

const routes: Routes = [
  {
    path: "",
    component: PaymentLandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PaymentRoutingModule {}
