import { Component } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ProductListComponent,
    CartComponent

  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 cartItems: any[] = [];

  

  addProductToCart(product: any) {
    const existingProduct = this.cartItems.find(item => item.title === product.title);

    if (existingProduct) {
      // Si le produit est déjà dans le panier, augmenter la quantité
      existingProduct.quantity += 1;
    } else {
      // Si le produit n'est pas dans le panier, l'ajouter avec une quantité de 1
      this.cartItems.push({ ...product, quantity: 1 });
    }
  }
  
}
