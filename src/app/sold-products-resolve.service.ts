import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Product } from './product';

@Injectable()
export class SoldProductsResolveService implements Resolve<Product[]> {

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

    return null;
  }

}
