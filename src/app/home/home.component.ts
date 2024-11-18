
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  categories = [
    {
      name: 'Moda Infantil',
      items: [
        { name: 'Vestido Infantil Azul', image: 'path/to/image1.jpg', price: 'R$ 50,00' },
        { name: 'Conjunto Infantil Menina', image: 'path/to/image2.jpg', price: 'R$ 70,00' },
        // Adicione mais itens conforme necessário
      ]
    },
    {
      name: 'Moda Feminina',
      items: [
        { name: 'Top Cropped Branco', image: 'path/to/image3.jpg', price: 'R$ 30,00' },
        { name: 'Short Feminino Verde', image: 'path/to/image4.jpg', price: 'R$ 40,00' },
        // Adicione mais itens conforme necessário
      ]
    },
    // Adicione mais categorias conforme necessário
  ];
}
