import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerDataComponent } from './customer-data.component';

const routes: Routes = [{ path: '', component: CustomerDataComponent }];

@NgModule({
  imports:[RouterModule.forChild(routes), CommonModule],
  declarations: [CustomerDataComponent],
  exports: [CustomerDataComponent],
})
export class CustomerDataModule {}
