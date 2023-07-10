import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from '../service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public username: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.username = this.tokenStorageService.getUser()
  }

}
