import {Component, OnInit} from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonRow
} from "@ionic/angular/standalone";
import {LocationListComponent} from "./location-list/location-list.component";
import {AsyncPipe} from "@angular/common";
import {LocationFacade} from "~challenge/location";
import { FooterBarComponent } from '~challenge/footer';
import { NavBarAuthComponent } from '~challenge/auth';

@Component({
  selector: 'app-location',
  imports: [
    IonList,
    IonGrid,
    IonRow,
    IonItem,
    IonLabel,
    IonCol,
    IonContent,
    IonCard,
    IonButton,
    LocationListComponent,
    AsyncPipe,
    IonHeader,
    IonFooter,
    NavBarAuthComponent,
    FooterBarComponent
  ],
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
  standalone: true
})
export class LocationPage implements OnInit {

  constructor(protected locationFacade: LocationFacade) { }

  ngOnInit() {
    this.locationFacade.loadLocations();
  }
}
