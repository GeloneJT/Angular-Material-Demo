import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent implements OnInit {
  categories: any;

  constructor() {
    this.categories = [
      {
        name: 'Beginner',
      },
      {
        name: 'Intermediate',
      },
      {
        name: 'Advanced',
      },
    ];
  }

  selectCategory(category: any) {
    this.categories
      .filter((c: any) => c != category)
      .forEach((c: { [x: string]: boolean }) => (c['selected'] = false));

    category.selected = !category.selected;
  }

  ngOnInit(): void {}
}
