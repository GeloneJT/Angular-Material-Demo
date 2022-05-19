import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { SelectDropdownComponent } from './select-dropdown/select-dropdown.component';
import { FormsModule } from '@angular/forms';
import { InputControlsComponent } from './input-controls/input-controls.component';
import { TextAreaComponent } from './text-area/text-area.component';
import { DatepickComponent } from './datepick/datepick.component';
import { IconsComponent } from './icons/icons.component';
import { ButtonComponent } from './button/button.component';
import { ChipsComponent } from './chips/chips.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { TooltipsComponent } from './tooltips/tooltips.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MatComponentsModule } from './mat-components.module';

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
    FormsModule,
    MatComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
