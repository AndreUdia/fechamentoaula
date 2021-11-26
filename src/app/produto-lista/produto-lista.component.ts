import { Component, OnInit } from '@angular/core';

import { Produto } from '../shared/produto.model';
import { PRODUTOS } from './produto-mock';

@Component({
  selector: 'app-produto-lista',
  templateUrl: './produto-lista.component.html',
  styleUrls: ['./produto-lista.component.css']
})
export class ProdutoListaComponent implements OnInit {

  public produtos: Produto[] = PRODUTOS;

  displayedColumns: string[] = ['title', 'category', 'price'];

  constructor() { console.log(this.produtos) }

  ngOnInit(): void {
  }

  getTotalCost() {
    return this.produtos.map(t => t.price).reduce((acc, value) => acc + value, 0);
  }
}
