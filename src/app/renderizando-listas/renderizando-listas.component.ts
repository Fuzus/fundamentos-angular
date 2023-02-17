import { Component } from '@angular/core';
import { Celular } from '../type/Celular';

@Component({
  selector: 'app-renderizando-listas',
  templateUrl: './renderizando-listas.component.html',
  styleUrls: ['./renderizando-listas.component.css']
})
export class RenderizandoListasComponent {
  celulares: Celular[] = [
    {id: 1, nome: "celular XL", descricao: "celular grande", esgotado: false},
    {id: 2, nome: "celular celular normal", esgotado: false},
    {id: 3, nome: "celular mini", descricao: "celular pequeno", esgotado: true},
  ]
}
