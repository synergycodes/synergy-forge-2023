import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { IntegrationListComponent } from './integration-list/integration-list.component';
import { IntegrationItemComponent } from './integration-item/integration-item.component';
import { CoreModule } from '../core/core.module';

const routes: Routes = [
  {
    path: '',
    component: IntegrationListComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), CoreModule],
  declarations: [IntegrationListComponent, IntegrationItemComponent],
  providers: [],
})
export class IntegrationsModule {}
