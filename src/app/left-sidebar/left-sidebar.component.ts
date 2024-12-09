import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule,CommonModule],
  templateUrl: './left-sidebar.component.html',
  styleUrl: './left-sidebar.component.css'
})
export class LeftSidebarComponent {
 isLeftSidebarCollapsed=input.required<boolean>() 
 items=[
  {
    RouterLink:'home',
    icon:'fal fa-home',
    label:'Home'
   },
  {
    RouterLink:'user',
    icon:'fas fa-user',
    label:'user'
   },
  {
  RouterLink:'control-panel',
  icon:'fal fa-cogs',
  label:'Control-panel'
 },

 {
  RouterLink:'configuration',
  icon:'fal fa-file-alt',
  label:'Configuration'
 },
 {
  RouterLink:'dashboard',
  icon:'fal fa-tachometer-alt',
  label:'Dashboard'
 }
 
]
}
