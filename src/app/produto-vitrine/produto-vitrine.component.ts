import { Component, OnInit } from '@angular/core';

import { Produto } from '../shared/produto.model';
import { PRODUTOS } from '../shared/produto-mock';

@Component({
  selector: 'app-produto-vitrine',
  templateUrl: './produto-vitrine.component.html',
  styleUrls: ['./produto-vitrine.component.css']
})
export class ProdutoVitrineComponent implements OnInit {

  public produtos: Produto[] = PRODUTOS;

  public produtoUm: Produto = this.produtos[0];

  constructor() { }

  ngOnInit(): void {
  }

}
