import { Component, OnInit } from '@angular/core';
import { IonContent, IonFooter, IonHeader, IonText } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { FooterBarComponent } from '~challenge/footer';
import {NavBarComponent} from '~challenge/auth';

@Component({
  selector: 'app-inactive',
  imports: [
    IonText,
    RouterLink,
    IonHeader,
    IonFooter,
    IonContent,
    FooterBarComponent,
    NavBarComponent
  ],
  templateUrl: './inactive.component.html',
  styleUrls: ['./inactive.component.scss'],
  standalone: true
})
export class InactiveComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
