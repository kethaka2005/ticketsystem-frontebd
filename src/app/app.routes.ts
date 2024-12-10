import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ControPanelComponent } from './contro-panel/contro-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginCustomerComponent } from './login/login.component';

import { UserSelectComponent } from './user-select/user-select.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';


export const routes: Routes = [
    {path:'',redirectTo:'user-select',pathMatch:'full'},
    {path:'user-select',component:UserSelectComponent},
    {path:'login',component:LoginCustomerComponent},
    {path:'home-vendor',component:HomeComponent},
    {path:'home-customer',component: HomeCustomerComponent},
  
    
    {path:'user-select',component:UserSelectComponent}
    
];
