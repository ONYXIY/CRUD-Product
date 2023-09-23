import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FakeBackendInterceptor } from './data-accerss/fake-backend/fake-backend.interceptor';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: FakeBackendInterceptor, multi: true}]
})
export class ProductComponent {
  private readonly fb = inject(FormBuilder)

  public productForm = this.fb.group({
    id: ['', Validators.required],
    productName: ['', Validators.required],
    description: ['', Validators.required],
    price: ['', [Validators.required, Validators.min(0)]],
  });
  

}
