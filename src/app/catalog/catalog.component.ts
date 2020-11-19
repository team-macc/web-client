import { Component, OnInit } from '@angular/core';

import { PRODUCTS } from './mock-products';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  listOfProducts = PRODUCTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
