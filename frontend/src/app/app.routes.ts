import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'adduser', component: AddUserComponent},
];
