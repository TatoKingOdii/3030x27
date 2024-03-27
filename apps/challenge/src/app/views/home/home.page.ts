import {Component, OnInit} from '@angular/core';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonRow,
  IonText
} from "@ionic/angular/standalone";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {Demo, DEMOS} from "~challenge/types";
import { FooterBarComponent } from '~challenge/footer';
import { NavBarComponent } from '~challenge/auth';

@Component({
  selector: 'app-home',
  imports: [IonContent, IonGrid, IonRow,
    IonCol, IonCard, IonCardHeader, IonCardContent,
    IonCardTitle, IonCardSubtitle, RouterLink,
    RouterLinkActive, IonHeader, IonFooter, IonText,
    FooterBarComponent, NavBarComponent],
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true
})
export class HomePage implements OnInit {

  demos: Demo[] = DEMOS;
  constructor() { }

  ngOnInit() {}
}
