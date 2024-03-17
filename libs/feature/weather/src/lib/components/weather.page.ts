import { Component } from '@angular/core';
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
import { WeatherFacade } from '../state/weather.facade';
import { FooterBarComponent } from '~challenge/footer';
import { FutureDatePipe } from '../pipes/future-date.pipe';
import { NavBarAuthComponent } from '~challenge/auth';

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, IonContent, IonGrid, IonRow, IonCard, IonCardHeader, IonCardTitle, IonCol, IonCardContent, IonSpinner, IonHeader, NavBarAuthComponent, IonFooter, FooterBarComponent, FutureDatePipe, IonCardSubtitle, IonItem, IonLabel, IonAccordionGroup, IonAccordion],
  templateUrl: './weather.page.html',
  styleUrl: './weather.page.scss',
})
export class WeatherPage {
  cities: string[] = ['Seattle', 'Denver', 'Miami', 'Boston'];
  today: Date;

  constructor(protected weatherFacade: WeatherFacade) {
    this.today = this.getToday();
  }

  ionViewDidEnter() {
    this.weatherFacade.loadWeather(this.cities);
  }

  getToday() {
    let now = new Date();
    const offset = now.getTimezoneOffset();
    return new Date(now.getTime() - (offset*60*1000));
  }
}
