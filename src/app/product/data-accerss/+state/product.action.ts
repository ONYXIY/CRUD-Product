import { createAction, props } from '@ngrx/store';
import { IProduct } from '../model/product.interface';


export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: IProduct }>()
);

export const updateProduct = createAction(
  '[Product] Update Product',
  props<{ product: IProduct }>()
);

export const deleteProduct = createAction(
  '[Product] Delete Product',
  props<{ id: number }>()
);

export const loadProducts = createAction(
  '[Product] Load Products',
  props<{ products: IProduct[] }>()
);
