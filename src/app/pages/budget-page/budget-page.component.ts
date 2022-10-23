import { Component, OnInit } from '@angular/core';
import { OperationType } from 'src/app/data';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.scss']
})
export class BudgetPageComponent implements OnInit {

  public selectedDate: Date = new Date();
  public accounts = [
    {
      name: 'Main',
      currency: '$',
      balance: 1200,
    },
    {
      name: 'Side',
      currency: '$',
      balance: 350
    }
  ]

  public accountOperations = [
    {
      name: 'Coffee',
      amount: 2.50,
      type: OperationType.Debit
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
