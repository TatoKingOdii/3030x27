import {Component} from '@angular/core';
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
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav-bar-unauth',
  imports: [
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonTitle,
    IonButton,
    RouterLink,
    IonButtons,
    IonContent
  ],
  templateUrl: './nav-bar-unauth.component.html',
  styleUrls: ['./nav-bar-unauth.component.scss'],
  standalone: true
})
export class NavBarUnauthComponent {
}
