import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: '/home', pathMatch: 'full' },
            { path: 'home', loadChildren: './home/home.module#HomeModule' }
        ]
    },
    {
        path: '**',
        redirectTo: 'home'
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
