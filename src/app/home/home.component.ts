import {Component, OnInit} from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';
import {MatDialog} from '@angular/material/dialog';
import {AddStockDialogComponent} from '../add-stock-dialog/add-stock-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public username: string;
  value = '';
  constructor(private tokenStorageService: TokenStorageService, private router: Router) {
  }

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUser();
  }
  searchStock() {
    this.router.navigate(['/search']);
  }
}
