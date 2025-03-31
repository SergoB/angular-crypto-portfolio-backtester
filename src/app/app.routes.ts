import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CryptoInfoComponent} from "./pages/crypto-info/crypto-info.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: "full"
  },
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path: 'crypto-info/:name',
    component: CryptoInfoComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];
