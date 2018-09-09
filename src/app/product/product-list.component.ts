import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle = 'nihao';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filterdProducts: any;
  errorMsg: any;

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private productService: ProductService) {
    this._listFilter = '';
  }

  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }

  set listFilter(value: string) {
    this._listFilter = value;
    this.filterdProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    console.log('this.filterdProducts', this.filterdProducts);
  }

  performFilter(filterBy: string) {
    return this.products.filter((p: IProduct) => p.productName.indexOf(filterBy) !== -1);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  onRatingClicked(message: string): void {
    this.pageTitle = message;
  }

  ngOnInit(): void {
    console.log('on init');
    this.productService.getProducts().subscribe(
      products => {
        console.log('products', products);
        this.products = products;
        this.filterdProducts = this.products;
      },
      error => (this.errorMsg = <any>error)
    );
  }
}
