import {Component, OnInit} from '@angular/core';
import {AddStockDialogComponent} from '../add-stock-dialog/add-stock-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {StockDataService} from '../service/stock-data.service';

@Component({
  selector: 'app-search-stock',
  templateUrl: './search-stock.component.html',
  styleUrls: ['./search-stock.component.css']
})
export class SearchStockComponent implements OnInit {
  searchQuery = '';
  searchResults: any;
  error = '';

  constructor(private stockDataService: StockDataService) {
  }

  ngOnInit(): void {
  }

  searchStocks() {
    if (this.searchQuery) {
      this.error = null;
      this.stockDataService.searchStocks(this.searchQuery).subscribe(
        data => {
          console.log(data);
          this.searchResults = data;
        },
        err => {
          console.log(err);
          this.error = 'Failed to search stocks';
        }
      );
    }
  }

}
