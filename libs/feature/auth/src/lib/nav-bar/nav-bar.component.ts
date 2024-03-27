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
import {AuthFacade} from "../auth.facade";

@Component({
  selector: 'app-nav-bar',
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
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
  standalone: true
})
export class NavBarComponent {

  constructor(public authFacade: AuthFacade) { }
}
