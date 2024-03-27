import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonAccordion,
  IonAccordionGroup,
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader, IonItem, IonLabel,
  IonRow,
  IonSpinner
} from '@ionic/angular/standalone';
import { FooterBarComponent } from '~challenge/footer';
import { NavBarComponent } from '~challenge/auth';
import {FutureDatePipe, Weather} from "~challenge/weather";

@Component({
  selector: 'app-weather-segment',
  standalone: true,
  imports: [CommonModule, IonContent, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCol, IonCardContent, IonSpinner, IonHeader, NavBarComponent, IonFooter, FooterBarComponent, FutureDatePipe, IonCardSubtitle, IonItem, IonLabel, IonAccordionGroup, IonAccordion, FutureDatePipe],
  templateUrl: './weather-segment.component.html',
  styleUrl: './weather-segment.component.scss',
})
export class WeatherSegmentComponent {
  @Input() weather!: Weather;
  @Input() today!: Date;

  constructor() {}
}
