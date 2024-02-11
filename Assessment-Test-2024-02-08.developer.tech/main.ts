// https://github.com/stackblitz/core/issues/2366
import 'zone.js'; // Avoid error in StackBlitz
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/rvapp.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch(err => console.error(err));
