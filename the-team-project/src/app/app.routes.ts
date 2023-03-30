import { Route } from '@angular/router';
import { IntegrationsModule } from '../modules/integrations/integrations.module';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => IntegrationsModule,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
