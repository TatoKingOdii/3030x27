import { Component, OnInit } from '@angular/core';
import { IonContent, IonFooter, IonHeader, IonText } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '~challenge/footer';
import { NavBarUnauthComponent } from '~challenge/auth';

@Component({
  selector: 'app-page-not-found',
  imports: [
    IonText,
    RouterLink,
    IonHeader,
    IonFooter,
    IonContent,
    FooterBarComponent,
    NavBarUnauthComponent
  ],
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  standalone: true
})
export class PageNotFoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
