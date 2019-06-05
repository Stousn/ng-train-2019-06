import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';
import { UserManagementModule } from './user-management/user-management.module';
import { CarMakesListComponent } from './car-makes-list/car-makes-list.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { InterestCalculatorComponent } from './interest-calculator/interest-calculator.component';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    CarMakesListComponent,
    AccountsComponent,
    AccountDetailsComponent,
    InterestCalculatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    UserManagementModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
