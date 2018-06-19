import { Component } from "@angular/core";
import { Subject } from "rxjs";

@Component({
  templateUrl: "./regions-page.component.html",
  styleUrls: ["./regions-page.component.css"],
  selector: "app-regions-page"
})
export class RegionsPageComponent { 

  public regions: any[] = [
    { code: "MAIN" }
  ];

  public onDestroy: Subject<void> = new Subject<void>();

  ngOnDestroy() {
    this.onDestroy.next();	
  }
}
