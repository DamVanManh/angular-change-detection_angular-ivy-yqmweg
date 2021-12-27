import { ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { Component, Input } from "@angular/core";

@Component({
  selector: "hello",
  templateUrl: "./hello.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HelloComponent {
  @Input() name: string;
  @Input() customer: any;
  loading = true;
  bgColor: string = "white";

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    
    setTimeout(() => {
      this.loading = false;
    }, 5000);
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked')
  }
  ngDoCheck(){
    console.log('ngDoCheck')
  }

  helloComponentRendering() {
    this.bgColor = "red";
    console.log("hello component rendering");
  }
}
