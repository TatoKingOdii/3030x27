import {Injectable} from '@angular/core';
import {ModalController} from "@ionic/angular/standalone";
import {ModalOptions} from "@ionic/angular";
import {Loc, LocationEditModalComponent, LocationFacade} from "~challenge/location";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalCtrl: ModalController) { }

  async presentLocationModal(location: Loc) {
    return this.openModal({
      component: LocationEditModalComponent,
      componentProps: {
        location: location
      }
    });
  }
  async openModal(options: ModalOptions) {
    const modal = await this.modalCtrl.create(options);
    await modal.present();
    return modal.onDidDismiss();
  }
}
