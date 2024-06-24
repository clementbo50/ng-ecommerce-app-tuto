import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    CurrencyPipe
  ],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent implements OnInit{
   @Input() imageUrl!: string;
   @Input() title!: string;
   @Input() description!: string;
   @Input() price!: number;

  /**
   * Événement émis lorsqu'un produit est ajouté au panier.
   */
  @Output() add = new EventEmitter<any>();

  /**
   * Émet l'événement addToCartEvent lorsqu'on l'appelle.
   * Cette fonction est appelée lorsque le bouton "Ajouter au panier" est cliqué.
   */

  ngOnInit(): void {
    console.log(`ProductItemComponent pour ${this.title} a été initialisé`);
  }
  addToCartEmitter() {
    // Émet l'événement addToCartEvent pour notifier le composant parent que le produit a été ajouté au panier.
    this.add.emit({
      imageUrl: this.imageUrl,
      title: this.title,
      description: this.description,
      price: this.price
    });
  }
}
