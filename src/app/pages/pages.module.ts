import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BudgetPageComponent } from './budget-page';
import { PagesRoutingModule } from './pages-routing.module';
import { CalendarPageComponent } from './calendar-page';
import {MatCardModule} from '@angular/material/card';

const DECLARATIONS = [BudgetPageComponent, CalendarPageComponent]

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule
  ],
  exports: [DECLARATIONS]
})
export class PagesModule { }
