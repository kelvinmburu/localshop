import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingpageComponent } from './components/landingpage/landingpage.component';
import { ReportComponent } from './components/report/report.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { DefectiveGoodsComponent } from './components/defective-goods/defective-goods.component';
import { ProductsComponent } from './components/products/products.component';
import { StoresComponent } from './components/stores/stores.component'; 

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import {SharedService} from './services/shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RequestComponent } from './components/request/request.component';
import { ClerkComponent } from './components/clerk/clerk.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    FooterComponent,
    LandingpageComponent,
    ReportComponent,
    AddUserComponent,
    DashboardComponent,
    OrdersComponent,
    DefectiveGoodsComponent,
    ProductsComponent,
    RequestComponent,
    ClerkComponent,
    StoresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
