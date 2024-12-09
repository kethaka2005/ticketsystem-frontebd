import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ControPanelComponent } from './contro-panel/contro-panel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';

import { UserSelectComponent } from './user-select/user-select.component';


export const routes: Routes = [
    {path:'',redirectTo:"user-select",pathMatch:'full'},
    {path:'user-select',component:UserSelectComponent},
    {path:'Login-customer',component:LoginCustomerComponent},
    {path:'control',component:ControPanelComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'home',component:HomeComponent},
    {path:'login-customer',component:LoginCustomerComponent},
    
    {path:'user-select',component:UserSelectComponent}
    
];
