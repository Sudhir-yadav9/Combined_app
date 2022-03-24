
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = 
[{path: 'login',component:LoginComponent},{path: 'users',component:UsersComponent},{ path: 'first', loadChildren: () => import('./first/first.module').then(m => m.FirstModule) }, { path: 'second', loadChildren: () => import('./second/second.module').then(m => m.SecondModule),canActivate:[AuthGuard]}, { path: 'Form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) }, { path: 'banking', loadChildren: () => import('./banking/banking.module').then(m => m.BankingModule) },
{ path: 'emi', loadChildren: () => import('./emi/emi.module').then(m => m.EmiModule) },
{ path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
