import { Routes } from '@angular/router';
import { TimerComponent } from './components/timer/timer.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/timer',
        pathMatch: 'full'
    },
    {
        path: 'timer',
        component: TimerComponent
    }
];
