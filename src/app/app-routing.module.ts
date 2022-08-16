import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CashierComponent } from './cashier/cashier.component';
import { NetworkerComponent } from './networker/networker.component';
import { OptionsComponent } from './options/options.component';
import { ReceiverComponent } from './receiver/receiver.component';
import { SenderComponent } from './sender/sender.component';

const routes: Routes = [
  {path: 'cashier', component:CashierComponent},
  {path: 'admin', component:AdminComponent},
  {path: 'networker', component:NetworkerComponent},
  {path: 'options', component:OptionsComponent},
  {path: 'sender', component:SenderComponent},
  {path: 'receiver', component:ReceiverComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
