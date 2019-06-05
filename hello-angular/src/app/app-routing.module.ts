import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarMakesListComponent } from './car-makes-list/car-makes-list.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';

const routes: Routes = [
  { path: 'car-makes', component: CarMakesListComponent },
  { path: 'accounts', component: AccountsComponent },
  { path: 'accounts/:id', component: AccountDetailsComponent },
  { path: 'icalc', component: InterestCalculatorComponent },
  { path: '', pathMatch: 'full', redirectTo: 'car-makes' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
