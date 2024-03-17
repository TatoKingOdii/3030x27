import { bootstrapApplication } from '@angular/platform-browser';
import { AppPage } from './app/app.page';
import { appConfig } from './app/app.config';

bootstrapApplication(AppPage, appConfig)
  .catch((err) => console.error(err));
