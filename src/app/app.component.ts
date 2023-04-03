import { Component } from '@angular/core';
import { data } from './data/products';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular app';
  products: IProduct[] = data;
}
