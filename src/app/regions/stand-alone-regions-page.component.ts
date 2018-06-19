import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./stand-alone-regions-page.component.html",
  styleUrls: ["./stand-alone-regions-page.component.css"],
  selector: "app-stand-alone-regions-page"
})
export class StandAloneRegionsPageComponent { 

  public onDestroy: Subject<void> = new Subject<void>();


  public regions: any[] = [
    { code: "MAIN" }
  ];

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
