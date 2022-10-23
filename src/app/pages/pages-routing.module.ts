import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BudgetPageComponent } from './budget-page';
import { CalendarPageComponent } from './calendar-page';

const routes: Routes = [
    { path: 'budget', component: BudgetPageComponent },
    { path: 'calendar', component: CalendarPageComponent },
    { path: '',   redirectTo: '/budget', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }
