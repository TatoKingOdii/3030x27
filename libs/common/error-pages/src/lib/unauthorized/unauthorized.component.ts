import { Component } from '@angular/core';
import { IonContent, IonFooter, IonHeader, IonText, IonTitle } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '~challenge/footer';
import { NavBarUnauthComponent } from '~challenge/auth';

@Component({
  selector: 'app-unauthorized',
  imports: [
    IonContent,
    IonText,
    IonTitle,
    RouterLink,
    IonHeader,
    IonFooter,
    FooterBarComponent,
    NavBarUnauthComponent
  ],
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss'],
  standalone: true
})
export class UnauthorizedComponent {
}
