import { BsDropdownModule } from 'ng2-bootstrap/dropdown';

import { LoggedInGuard } from './../auth/services/loggedin.guard';
import { AuthenticationService } from './../auth/services/authentication.service';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HttpModule } from "@angular/http";
import { ConfigService } from './../shared/services/config.service';

@NgModule({
  imports: [
    DashboardRoutingModule,
    ChartsModule,
    HttpModule,
    BsDropdownModule
  ],
  declarations: [ DashboardComponent ],
  providers: [AuthenticationService, LoggedInGuard, ConfigService]
})
export class DashboardModule { }
