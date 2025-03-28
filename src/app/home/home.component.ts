import {Component} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {DatepickerComponent} from "../datepicker/datepicker.component";
import {FormFieldComponent} from "../form-field/form-field.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    DatepickerComponent,
    FormFieldComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
