import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CashierComponent } from './cashier/cashier.component';
import { AdminComponent } from './admin/admin.component';
import { NetworkerComponent } from './networker/networker.component';
import { OptionsComponent } from './options/options.component';
import { BasicComponent } from './basic/basic.component';
import { SenderComponent } from './sender/sender.component';
import { ReceiverComponent } from './receiver/receiver.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CashierComponent,
    AdminComponent,
    NetworkerComponent,
    OptionsComponent,
    BasicComponent,
    SenderComponent,
    ReceiverComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
