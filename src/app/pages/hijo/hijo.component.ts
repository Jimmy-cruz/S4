import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent {

  // con este codigo podemos obtener datos de una variable del padre
  @Input() nombreHijo!: String // = "por input";

  // con este codigo podemos enviar datos de una variable hija al componente padre
  @Output() cambioNombreHijo = new EventEmitter<String>();

  // nombreHijo = "Julian lenon"

  changeSonName(){
    this.nombreHijo = "por boton";
    this.cambioNombreHijo.emit(this.nombreHijo);
  }
}
