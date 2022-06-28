import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import { SplashScreen } from '@capacitor/splash-screen';

// Show the splash for two seconds and then automatically hide it:
SplashScreen.show({
  showDuration: 5000,
  autoHide: true
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
