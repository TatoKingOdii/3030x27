import {Component, EventEmitter, Input, Output} from '@angular/core';
import {IonButton, IonItem, IonLabel, IonList, IonListHeader, IonSpinner, IonText} from "@ionic/angular/standalone";
import {WorldLoc} from "~challenge/economic";

@Component({
  selector: 'app-world-list',
  standalone: true,
  imports: [
    IonList,
    IonListHeader,
    IonLabel,
    IonText,
    IonItem,
    IonSpinner,
    IonButton
  ],
  templateUrl: './world-list.component.html',
  styleUrl: './world-list.component.scss'
})
export class WorldListComponent {

  @Input() worldLocs: WorldLoc[] | null = []
  @Input() loadingWorlds: boolean | null = false;
  @Input() loadedPages: number | null = 0;
  @Input() maxPages: number | null = 0;
  @Output() refreshAll: EventEmitter<void> = new EventEmitter<void>();
  @Output() loadMore: EventEmitter<number> = new EventEmitter<number>();
}
