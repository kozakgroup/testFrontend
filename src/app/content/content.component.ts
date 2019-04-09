import { Component } from '@angular/core';
import {ItemsService} from '../items.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {
  private mockBigItem = {
    name: 'Augustus Residence',
    location: {
      city: 'Nyon',
      canton: 'Vaud',
    },
    available_to_invest: 15000000,
    purchase_price: 35000000,
    minimum_investment: 100000,
    type: 'Co-Ownership',
    loan_to_value: 55.00,
    holding_period: '7 years',
    expected_roi: 6.00,
    status: 'progress',
    progress: 50,
  };

  private mockSmallItems = [
    {
      name: 'residence de la colline',
      location: {
        city: 'Lausanne',
        canton: 'Vaud',
      },
      available_to_invest: 1000000,
      purchase_price: 25000000,
      minimum_investment: 100000,
      type: 'Co-Ownership',
      loan_to_value: 55,
      holding_period: '7 years',
      expected_roi: 4.88,
      status: 'details',
      progress: 75,
    },
    {
      name: 'Calla Rossa Complex',
      location: {
        city: 'Carouge',
        canton: 'Geneva',
      },
      available_to_invest: 10000000,
      purchase_price: 22000000,
      minimum_investment: 500000,
      type: 'Co-Investment',
      loan_to_value: 60,
      holding_period: '7 years',
      expected_roi: 5.20,
      status: 'waiting',
      progress: 0,
    }
  ];

  private itemsFromApi;

  constructor(private itemsService: ItemsService) {
    itemsService.fetchItems().subscribe((data: any) => {
      this.itemsFromApi = data.offerings;
    });
  }

}
