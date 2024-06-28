import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { DataViewComponent } from './dataview/dataview.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'adduser', component: AddUserComponent},
    {path: 'refresh', component: DataViewComponent},
];
