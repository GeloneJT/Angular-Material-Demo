import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datepick',
  templateUrl: './datepick.component.html',
  styleUrls: ['./datepick.component.css'],
})
export class DatepickComponent implements OnInit {
  minDate: Date;
  maxDate: Date;

  constructor() {
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 1, 4, 17);
    this.maxDate = new Date(currentYear + 1, 4, 19);
  }

  ngOnInit(): void {}
}
