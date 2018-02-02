import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  people = [
    {
      name: "Brandi",
      info: { band: "Metallica", movie: "gone with wind", book: "Homer" }
    },
    { name: "Robert" },
    { name: "Kristen" },
    { name: "Amanda" }
  ];
}
