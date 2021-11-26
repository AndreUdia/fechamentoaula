import { Component, OnInit } from '@angular/core';

import { Produto } from '../shared/produto.model';
import { PRODUTOS } from '../shared/produto-mock';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
