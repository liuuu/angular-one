import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';
import { NgModel } from '@angular/forms';
import { CriteriaComponent } from '../shared/criteria/criteria.component';

@Component({
  // selector: 'app-pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit, AfterViewInit {
  pageTitle = 'nihao';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  filterdProducts: any;
  errorMsg: any;

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  listFilter = '';

  includeDetail = true;
  parentListFilter: string;

  @ViewChild(CriteriaComponent)
  filterComponent: CriteriaComponent;

  @ViewChild('FilterInput')
  filterElementRef: ElementRef;

  constructor(private productService: ProductService) {
    // this._listFilter = '';
  }

  // _listFilter: string;
  // get listFilter(): string {
  //   return this._listFilter;
  // }

  // set listFilter(value: string) {
  //   this._listFilter = value;
  //   this.filterdProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  //   console.log('this.filterdProducts', this.filterdProducts);
  // }

  performFilter(filterBy: string) {
    if (filterBy) {
      this.filterdProducts = this.products.filter((p: IProduct) => p.productName.indexOf(filterBy) !== -1);
    } else {
      this.filterdProducts = this.products;
    }
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
        console.log('this.parentListFIlter', this.parentListFilter);
        // this.filterdProducts = this.performFilter(this.parentListFilter);
        // console.log('this.parentListFilter', this.parentListFilter);
        this.performFilter(this.parentListFilter);
      },
      error => (this.errorMsg = <any>error)
    );
  }

  ngAfterViewInit() {
    // this.filterInput.valueChanges.subscribe(value => {
    //   this.filterdProducts = this.performFilter(value);
    // });
    this.filterElementRef.nativeElement.focus();
    this.parentListFilter = this.filterComponent.listFilter;
  }

  onValueChange(value: string) {
    this.performFilter(value);
  }
}
