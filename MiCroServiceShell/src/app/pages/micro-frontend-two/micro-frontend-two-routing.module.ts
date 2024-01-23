import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MicrofrontendtwoComponent } from './micro-frontend-two.component';


const routes: Routes = [
  {
    path: '',
    component: MicrofrontendtwoComponent,
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MicroFrontendOneRoutingModule {}