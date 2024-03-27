import {Component, inject, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonRow} from "@ionic/angular/standalone";
import {NavBarComponent} from "~challenge/auth";
import {FooterBarComponent} from "~challenge/footer";
import {WorldListComponent} from "./world-list/world-list.component";
import {WorldFacade} from "../../state/world.facade";

@Component({
  selector: 'c3030x27-economic',
  standalone: true,
  imports: [CommonModule, IonHeader, NavBarComponent, FooterBarComponent, IonFooter, IonContent, IonGrid, IonRow, IonCol, WorldListComponent],
  templateUrl: './economic.page.html',
  styleUrl: './economic.page.scss',
})
export class EconomicPage implements OnInit {
  public worldFacade: WorldFacade = inject(WorldFacade);

  ngOnInit() {
    this.worldFacade.refreshWorldLocs();
  }
}
