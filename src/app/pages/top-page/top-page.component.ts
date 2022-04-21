import { Component } from '@angular/core';

interface TestData {
  id: number;
  name: string;
  code_num: string;
  category: string;
  price: number;
}
enum ProductCategoryEnum {
  SHOES = 'shoes',
  CLOTHES = 'clothes',
  SUNGLASS = 'sunglass',
}
@Component({
  selector: 'fw-top-page',
  templateUrl: './top-page.component.html',
  styleUrls: ['./app.component.css'],
})
export class TopPageComponent {
  square_number: number = null;
  // clickme(): void {
  //   this.square_number;
  //   console.log(this.square_number);
  // }
  public readonly productCategoryEnum = ProductCategoryEnum;
  public readonly productCategories: ProductCategoryEnum[] = [
    ProductCategoryEnum.SHOES,
    ProductCategoryEnum.CLOTHES,
    ProductCategoryEnum.SUNGLASS,
  ];

  products: TestData[] = [
    { id: 1, name: 'adidas', code_num: 'S111', category: 'shoes', price: 5000 },
    { id: 2, name: 'nike', code_num: 'S123', category: 'shoes', price: 4000 },
    { id: 3, name: 'Lee', code_num: 'T144', category: 'clothes', price: 7000 },
    {
      id: 4,
      name: 'rayban',
      code_num: 'G124',
      category: 'sunglass',
      price: 20000,
    },
    {
      id: 5,
      name: 'police',
      code_num: 'G222',
      category: 'sunglass',
      price: 5000,
    },
  ];
  public filteredProducts: TestData[] = this.products;
  public value: ProductCategoryEnum = null;
  public toggleAll(): void {
    console.log('value:' + this.value);
  }
  public filterProductCategory(): void {
    if (!this.value) {
      this.filteredProducts = this.products;
      return;
    }
    this.filteredProducts = this.products.filter(
      ({ category }) => category === this.value
    );
  }
}
