import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule, ProductDetailComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 1500, inStock: true, onSale: false, image:"https://m.media-amazon.com/images/I/816uW9q6BKS.jpg" },
    { id: 2, name: 'Smartphone', price: 800, inStock: true, onSale: true, image:"https://m.media-amazon.com/images/I/61aiFCe6PpL.jpg" },
    { id: 3, name: 'Tablet', price: 400, inStock: false, onSale: false, image:"https://m.media-amazon.com/images/I/71Mt4JAZQtL.jpg" },
    { id: 4, name: 'Monitor', price: 200, inStock: true, onSale: true, image:"https://www.lg.com/content/dam/channel/wcms/mx/images/monitores/24mr400-b_awmq_enms_mx_c/gallery/large03.jpg" },
    { id: 5, name: 'Teclado mecánico', price: 100, inStock: true, onSale: false, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCyiov_G7blyh1gKaxeBJwKiOk69pQ-PX9Xg&s" },
    { id: 6, name: 'Mouse inalámbrico', price: 50, inStock: false, onSale: false, image:"https://coolboxmx.vtexassets.com/arquivos/ids/159664/RAT001-MX.jpg?v=638618487082470000" },
    { id: 7, name: 'Impresora láser', price: 250, inStock: true, onSale: true, image:"https://http2.mlstatic.com/D_NQ_NP_666230-MPE49256125662_032022-O.webp" },
    { id: 8, name: 'Auriculares Bluetooth', price: 120, inStock: true, onSale: false, image:"https://www.steren.com.mx/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/22545a64c/audifonos-bluetooth-touch-true-wireless-con-active-noise-cancelling-y-enviromental-noise-cancelling.jpg" },
    { id: 9, name: 'Silla ergonómica', price: 300, inStock: false, onSale: true, image:"https://m.media-amazon.com/images/I/71O-02eW61L.jpg" },
    { id: 10, name: 'Micrófono profesional', price: 180, inStock: true, onSale: false, image:"https://m.media-amazon.com/images/I/81atqMlP6zL._AC_UF1000,1000_QL80_.jpg" },
    { id: 11, name: 'Disco SSD 1TB', price: 220, inStock: true, onSale: true, image:"https://http2.mlstatic.com/D_NQ_NP_868010-MLU70500935620_072023-O.webp" },
    { id: 12, name: 'Cámara web 1080p', price: 90, inStock:true, onSale: false, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWYxKQJteB8JVWUPsXAR9g5hF_DpRorBw1w&s" },
    { id: 13, name: 'Router Wi-Fi 6', price: 160, inStock: false, onSale: true, image:"https://m.media-amazon.com/images/I/71MfdgsWMFL.jpg" },
    { id: 14, name: 'Tarjeta gráfica RTX 4060', price: 500, inStock: true, onSale: false, image:"https://m.media-amazon.com/images/I/51Q99CZv-SL._AC_UF894,1000_QL80_.jpg" },
    { id: 15, name: 'Smartwatch', price: 250, inStock: true, onSale: true, image:"https://m.media-amazon.com/images/I/61yEHZXdi6L._AC_UF1000,1000_QL80_.jpg" },
  ];

  selectedProduct: Product | null = null;

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
