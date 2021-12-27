import { NgModule } from "@angular/core";
import { HeroDisplayComponent } from "./components/hero-display/hero-display.component";
import { SharedService } from "./services/shared.service";

@NgModule({
  declarations: [HeroDisplayComponent],
  providers: [SharedService]
})
export class SharedModule {}
