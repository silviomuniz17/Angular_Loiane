import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {outputAst} from "@angular/compiler";

@Component({
  selector: 'app-contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0; // ou valor = 0;

  @Output() mudouValor = new EventEmitter();

  //forma de passar eventos

  incrementa() {
    this.valor++;
    // pegando o valor e colocando mais um
    this.mudouValor.emit({novoValor: this.valor});
    //pegando e evendo e quando usar ele vai emitir o novo valor
  }

  decrementa() {
    this.valor--;
    //pegando o valor e diminuindo um
    this.mudouValor.emit({novoValor: this.valor});
    //pegando e evendo e quando usar ele vai emitir o novo valor
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
