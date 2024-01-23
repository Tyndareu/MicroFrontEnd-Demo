import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MicrofrontendtwoComponent } from './micro-frontend-two.component';
import { MicroFrontendOneRoutingModule } from './micro-frontend-two-routing.module';

@NgModule({
  imports: [CommonModule, MicroFrontendOneRoutingModule],
  declarations: [MicrofrontendtwoComponent],
  exports: [MicrofrontendtwoComponent],
})
export class MicrofrontendtwoModule {}
