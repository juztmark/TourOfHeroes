import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroCreateComponent } from './hero-create/hero-create.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { ItemCreateComponent } from './item-create/item-create.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { ItemShopComponent } from './item-shop/item-shop.component';
import { ItemsComponent } from './items/items.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'detail/:id',
    component: HeroDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: 'items', component: ItemsComponent, canActivate: [AuthGuard] },
  {
    path: 'item/detail/:id',
    component: ItemDetailComponent,
    canActivate: [AuthGuard],
  },
  { path: 'shop/:id', component: ItemShopComponent, canActivate: [AuthGuard] },
  {
    path: 'create/hero',
    component: HeroCreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'create/item',
    component: ItemCreateComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
