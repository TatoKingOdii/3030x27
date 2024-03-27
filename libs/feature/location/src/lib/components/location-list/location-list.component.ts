import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonModal, IonSpinner,
  IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {DEFAULT_LOCATION, deleteLocation, Loc} from '~challenge/location';


@Component({
  selector: 'app-location-list',
  imports: [
    IonButton,
    IonItem,
    IonLabel,
    IonList,
    IonListHeader,
    IonText,
    IonIcon,
    IonModal,
    IonContent,
    IonInput,
    IonCard,
    IonHeader,
    IonFooter,
    IonButtons,
    IonToolbar,
    IonTitle,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonSpinner
  ],
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
  standalone: true
})
export class LocationListComponent {

  @Input() locations: Loc[] | null = []
  @Input() loadingLocations: boolean | null = false;
  @Output() editLoc = new EventEmitter<Loc>();
  @Output() deleteLoc = new EventEmitter<Loc>();

  constructor() {}

  protected readonly DEFAULT_LOCATION = DEFAULT_LOCATION;
}
