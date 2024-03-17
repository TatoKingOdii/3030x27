import { Component } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { AsyncPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar-auth',
  imports: [
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonTitle,
    IonButton,
    AsyncPipe,
    RouterLink,
    IonButtons,
    IonContent
  ],
  templateUrl: './nav-bar-auth.component.html',
  styleUrls: ['./nav-bar-auth.component.scss'],
  standalone: true
})
export class NavBarAuthComponent {

  constructor() { }
}
