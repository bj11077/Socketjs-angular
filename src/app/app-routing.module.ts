import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocksockComponent } from './socksock/socksock.component';
// import { WebsockComponent } from './websock/websock.

const routes: Routes = [
  {path: 'sock', component:SocksockComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
