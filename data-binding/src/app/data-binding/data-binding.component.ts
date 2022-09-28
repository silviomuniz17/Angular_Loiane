import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {


//======================================================================================================================
  //Interpolation / Interpolação
  url: string = 'https://github.com/silviomuniz17'; //criando uma variavel URL do tipo string que recebe uma URL
  cursoAngular: boolean = true;

  getValor() {
    return 1;
  };

  getCurtirCurso() {
    return true;
  }

// =====================================================================================================================
//======================================================================================================================
  //Property Binding
  urlImagem: string = 'https://cache.lovethispic.com/uploaded_images/234751-When-You-Love-And-Laugh-Abundantly-You-Live-A-Beautiful-Life.jpg'; //criando uma variavel URLImagem do tipo string que recebe uma URL
  // cursoAngular: boolean = true;
  //
  // getValor() {
  //   return 1;
  // };
  //
  // getCurtirCurso() {
  //   return true;
  // }
// =====================================================================================================================

  ValorAtual: string = ''; //criando uma variavel para receber valor digitado do tipo string e vasia
  ValorSalvo = '';
  isMouseOver: boolean = false;

  botaoClicado() {
    // criando metodo de clicar no botão
    alert('botão clicado')
  }

  onKeyUp(evento: KeyboardEvent) { //estou tipando essa variavel que estou recebendo
    console.log((<HTMLInputElement>evento.target).value); //pegando apenas o valor do log que foi digitado na caixa de texto
    this.ValorAtual = (<HTMLInputElement>evento.target).value; // estou recebendo o valor digitado e colocando na variavel criada á cima
  }

  SalvarValor(valor: any) {
    this.ValorSalvo = valor;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver;
    // negando o seu propio valor (Esta negando e quando passo em cima ele nega tiro ele positivo)
  }
// ====================================================================================================================
  //aula 13

  nomeDoCurso: string = 'Angular'; //passando a propiedade nomeDoCurso do tipo string
  valorInicial = 15;

  onMudouValor(evento: any){
      console.log(evento.novoValor);
  }


  constructor() {}

  ngOnInit(): void {
  }

}
