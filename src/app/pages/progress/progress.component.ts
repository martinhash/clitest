import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["progress.component.css"],
})
export class ProgressComponent implements OnInit {
  progress = 50;

  constructor() {}

  ngOnInit() {}

  changeProgress(n: number) {
    if (this.progress >= 100 && n > 0) {
      return;
    }
    if (this.progress <= 0 && n < 0) {
      return;
    }
    this.progress = this.progress + n;
  }

  get getProgress() {
    return this.progress + "%";
  }
}
