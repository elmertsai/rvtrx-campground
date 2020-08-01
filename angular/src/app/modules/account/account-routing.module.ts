import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './account/account.component';
import { AddressComponent } from './address/address.component';
import { PaymentComponent } from './payment/payment.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{ component: AccountComponent, path: '' }];

@NgModule({
  declarations: [AccountComponent, AddressComponent, PaymentComponent, ProfileComponent],
  exports: [RouterModule],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AccountRoutingModule {}
