import { ProductsService } from './products.service';
import { Products } from './../../models/products.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productsList: Products[] = [];

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
  }
  private getProducts(): void {
    this.productsService.getProducts().subscribe((res: any) => {
    this.productsList = res ;
    })
  }

}
