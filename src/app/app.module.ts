import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "./modules/shared/shared.module";
import { CommonModule } from "@angular/common";
import { HelloComponent } from "./components/hello.component";
import { HomeComponent } from "./components/home.component";
const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "payment",
    loadChildren: () =>
      import("./modules/payment/payment.module").then(m => m.PaymentModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    SharedModule,
    CommonModule
  ],
  declarations: [AppComponent, HelloComponent, HomeComponent],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
