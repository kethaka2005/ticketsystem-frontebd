import { CommonModule } from "@angular/common";
import { Component, OnInit, signal, HostListener } from "@angular/core";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ConfigurationComponent } from "./configuration/configuration.component";
import { ControPanelComponent } from "./contro-panel/contro-panel.component"; 
import { DashboardComponent } from "./dashboard/dashboard.component"; 
import { HomeComponent } from "./home/home.component"; 
import { LeftSidebarComponent } from "./left-sidebar/left-sidebar.component"; 
import { LoginCustomerComponent } from "./login/login.component"; 
import { MainComponent } from "./main/main.component";  
import { UserSelectComponent } from "./user-select/user-select.component"; 
import { BrowserModule } from "@angular/platform-browser";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    LeftSidebarComponent,
    MainComponent,
    FormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,

  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Fixed typo
})
export class AppComponent implements OnInit {
  title = 'Real_Time_Event_Ticketing_System';
  isLeftSidebarCollapsed = signal<boolean>(false);
  screenWidth = signal<number>(window.innerWidth);

  @HostListener('window:resize')
  onResize(): void {
    this.screenWidth.set(window.innerWidth);
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  ngOnInit(): void {
    this.isLeftSidebarCollapsed.set(this.screenWidth() < 768);
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }
}



