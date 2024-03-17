import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonFooter, IonInput, IonModal, IonToolbar, ModalController
} from "@ionic/angular/standalone";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {v4} from "uuid";
import {DEFAULT_LOCATION, Loc, LocationFacade} from '~challenge/location';
import {TypedForm} from "~challenge/types";

@Component({
  selector: 'app-location-edit',
  imports: [
    IonButton,
    IonButtons,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonFooter,
    IonInput,
    IonModal,
    IonToolbar,
    ReactiveFormsModule
  ],
  templateUrl: './location-edit-modal.component.html',
  styleUrls: ['./location-edit-modal.component.scss'],
  standalone: true
})
export class LocationEditModalComponent implements OnInit {
  @Input() location!: Loc;
  locationForm!: TypedForm<Loc>;

  constructor(private formBuilder: FormBuilder, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.locationForm = this.buildForm(this.location);
  }

  buildForm(location: Loc) {
    return this.formBuilder.nonNullable.group({
      'id': [location.id],
      'name': [location.name, [Validators.required]],
      'climate': [location.climate, [Validators.required]],
      'cost': [location.cost, [Validators.required]],
      'attractions': [location.attractions, [Validators.required]]
    });
  }

  dismiss() {
    this.modalCtrl.dismiss('dismiss');
  }

  saveForm() {
    this.modalCtrl.dismiss({...DEFAULT_LOCATION, ...this.locationForm.value}, 'dismiss');
  }
}
