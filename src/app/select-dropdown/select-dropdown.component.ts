import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.css'],
})
export class SelectDropdownComponent implements OnInit {
  colors = [
    {
      id: 1,
      name: 'Red',
    },
    {
      id: 2,
      name: 'Green',
    },
    {
      id: 3,
      name: 'Blue',
    },
  ];

  color = 2;

  constructor() {}

  ngOnInit(): void {}
}
