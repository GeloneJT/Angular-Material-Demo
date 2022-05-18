import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-progress-spinner',
  templateUrl: './progress-spinner.component.html',
  styleUrls: ['./progress-spinner.component.css'],
})
export class ProgressSpinnerComponent implements OnInit {
  //  Determinate spinner properties
  progress = 0;
  timer;

  isLoading = false;

  constructor() {
    //  Simulates the progress of an action using determinate as the mode type
    this.timer = setInterval(() => {
      this.progress++;
      if (this.progress == 100) {
        clearInterval(this.timer);
      }
    }, 20);

    //  SImulates a call to the server using indeterminate as the mode type
    this.isLoading = true;
    this.getCourses().subscribe((x) => (this.isLoading = false));
  }

  getCourses() {
    return timer(2000);
  }

  ngOnInit(): void {}
}
