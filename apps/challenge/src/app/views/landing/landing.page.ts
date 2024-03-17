import { Component } from '@angular/core';
import { IonContent, IonFooter, IonHeader, IonImg, IonText } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '~challenge/footer';
import { CatUrlPipe } from '~challenge/cats';
import { NavBarUnauthComponent } from '~challenge/auth';

@Component({
  selector: 'app-landing',
  imports: [
    IonText,
    RouterLink,
    IonHeader,
    IonFooter,
    IonContent,
    IonImg,
    FooterBarComponent,
    CatUrlPipe,
    NavBarUnauthComponent
  ],
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
  standalone: true
})
export class LandingPage {
  catSize: number = Math.floor(Math.random() * 400) + 200;
}
