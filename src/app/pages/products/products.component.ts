import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from './services/products.service';
import { Product } from './interfaces/product.interface';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products$!:Observable<Product[]>;

  constructor(private readonly productsSvc: ProductsService) { }

  ngOnInit(): void {
    this.products$ = this.productsSvc.getProducts();
  }

  trackBy(index:number, product:Product):number {
    return product.id;
  }

}
