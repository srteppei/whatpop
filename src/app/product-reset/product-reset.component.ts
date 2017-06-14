import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/switchMap';

import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-reset',
  templateUrl: './product-reset.component.html',
  styleUrls: ['./product-reset.component.css']
})
export class ProductResetComponent implements OnDestroy, OnInit {

  products: Product[];
  private _productStream$: Subject<number> = new Subject<number>();

  constructor(
    private _productService: ProductService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._productStream$
      .switchMap((productId: number) => this._productService.setProductAvailable(productId))
      .subscribe((product: Product) => this._updateProduct(product));
    this._route.data.forEach((data: { products: Product[] }) => this.products = data.products);
    window.scrollTo(0, 0);
  }

  ngOnDestroy(): void {
    this._productStream$.unsubscribe();
  }

  private _updateProduct(product: Product): void {
    const productIndex = this.products.findIndex((p: Product): boolean => p.id === product.id);
    if (productIndex > -1) {
      this.products.splice(productIndex, 1);
    }
  }

  setProductAvailable(productId: number): void {
    this._productStream$.next(productId);
  }

}
