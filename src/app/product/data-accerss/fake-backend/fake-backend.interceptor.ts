import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('/products') && request.method === 'GET') {
      // Имитируем чтение продуктов
      return of(new HttpResponse({ status: 200, body: [/* Массив продуктов */] })).pipe(delay(500));
    }
  
    if (request.url.endsWith('/products') && request.method === 'POST') {
      // Имитируем добавление продукта
      // ...
  
      return of(new HttpResponse({ status: 200, body: request.body })).pipe(delay(500));
    }
  
    // ...
  
    // Если ни одно условие не подходит, пропускаем запрос дальше
    return next.handle(request);
  }
  
}
