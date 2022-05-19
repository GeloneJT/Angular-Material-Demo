import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { MatRadioModule } from '@angular/material/radio';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { InputControlsComponent } from './input-controls/input-controls.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextAreaComponent } from './text-area/text-area.component';
import { DatepickComponent } from './datepick/datepick.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { IconsComponent } from './icons/icons.component';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from './button/button.component';
import { MatButtonModule } from '@angular/material/button';
import { ChipsComponent } from './chips/chips.component';
import { MatChipsModule } from '@angular/material/chips';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    RadioButtonComponent,
    SelectDropdownComponent,
    InputControlsComponent,
    TextAreaComponent,
    DatepickComponent,
    IconsComponent,
    ButtonComponent,
    ChipsComponent,
    ProgressSpinnerComponent,
    TooltipsComponent,
    MaterialTabsComponent,
    MaterialDialogComponent,
    EditCourseComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatTabsModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
