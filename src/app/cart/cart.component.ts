import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  @Input() cartItems!: any[];

  removeProductFromCart(product: any) {
    const productIndex = this.cartItems.findIndex(item => item.title === product.title);
    
    if(productIndex > -1) {
      this.cartItems[productIndex].quantity -= 1;
      if(this.cartItems[productIndex].quantity === 0) {
        this.cartItems.splice(productIndex, 1);
      }
    }
  }

  get totalPrice() {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }
}
