import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price?: number;
  isPromoted: boolean;
};

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss'
})
export class CatalogComponent {
  products: Product[] = [
    {id: 1, name: "product1", price: 5, isPromoted: false},
    {id: 2, name: "product2", price: 9, isPromoted: true},
    {id: 3, name: "product3", isPromoted: false},
    {id: 4, name: "product4", price: 2678, isPromoted: false},
    {id: 5, name: "product5", isPromoted: true},
  ];
}
