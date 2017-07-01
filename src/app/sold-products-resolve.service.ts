import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from './product';
import { ProductFilter } from "./product-filter";
import {ProductService} from "./product.service";

@Injectable()
export class SoldProductsResolveService implements Resolve<Product[]> {

  constructor(private _productService: ProductService){}

  resolve(route: ActivatedRouteSnapshot): Observable<Product[]> {

    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Yellow Path                                                      |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|
    | Aquí toca hacer varias cosas:                                    |
    |                                                                  |
    | 1. Necesitamos obtener aquellos productos que están vendidos; es |
    |    decir, aquellos cuyo 'state' es 'sold'. Quizá te ayude el     |
    |    modelo 'ProductFilter'.                                       |
    |                                                                  |
    | 2. Debemos retornar el observable que contiene la colección de   |
    |    productos vendidos. Toca ir a servidor a través del servicio  |
    |    ProductService, que tendrás que inyectar como dependencia.    |
    |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    const productFilter : ProductFilter = {state:'sold'};
    return this._productService.getProducts(productFilter);;
  }

}
