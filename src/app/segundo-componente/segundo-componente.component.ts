import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "João";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/annie-eat-pie.jpg";


  mostrarDataNascimento() {
    alert(`A data de nascimento do ${this.nome} é ${this.dataNascimento}`)
  }

}
