import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditCourseComponent } from '../edit-course/edit-course.component';

@Component({
  selector: 'app-material-dialog',
  templateUrl: './material-dialog.component.html',
  styleUrls: ['./material-dialog.component.css'],
})
export class MaterialDialogComponent implements OnInit {
  openDialog() {
    this.dialog
      .open(EditCourseComponent, {
        data: {
          courseId: 1
        }
      })
      .afterClosed()
      .subscribe((result) => console.log(result));
  }

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
}
