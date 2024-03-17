import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonFooter,
  IonHeader,
  IonInput,
  IonLabel,
  IonText
} from '@ionic/angular/standalone';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthFacade, DEFAULT_USER, NavBarUnauthComponent, User } from '~challenge/auth';
import { FooterBarComponent } from '~challenge/footer';
import { TypedForm } from '~challenge/types';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonInput,
    IonButton,
    ReactiveFormsModule,
    IonHeader,
    IonFooter,
    IonContent,
    IonButtons,
    IonLabel,
    IonText,
    FooterBarComponent,
    NavBarUnauthComponent,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true
})
export class LoginComponent {

  loginForm!: TypedForm<User>;

  constructor(private authFacade: AuthFacade, private formBuilder: FormBuilder) {
    this.loginForm = this.createForm();
  }

  private createForm(): TypedForm<User> {
    return this.formBuilder.nonNullable.group({
      'user': ['', Validators.required],
      'pass': ['', Validators.required]
    });
  }

  login() {
    this.authFacade.login({...DEFAULT_USER, ...this.loginForm.value});
    this.loginForm.reset();
  }
}
