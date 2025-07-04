import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { InMemoryDataService } from './core/mock/in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient(), importProvidersFrom(
    InMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
      apiBase: 'api/',
      delay: 500
    })
  )
  ]
};
