import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

export const routes: Routes = [

    {
        path: 'heroes',
        component: HeroesComponent,
        title: 'Heroes'
    }

];
