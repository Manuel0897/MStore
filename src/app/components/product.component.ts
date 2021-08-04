import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

export class ProductComponent {
    @Input() product: Product = {
        id: '-1',
        image: '',
        title: '',
        price: 0,
        description: ''
    };
    @Output() productClicked: EventEmitter<string> = new EventEmitter();

    addCart(id: string) {
        console.log('add carrito');
        this.productClicked.emit(id);
    }
}