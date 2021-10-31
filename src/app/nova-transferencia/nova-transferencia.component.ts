import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTrnsferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();
  @Output() valoresComErro = new EventEmitter<string>();
  valor: number=0;
  destino: number=0;

  transferir() {
    console.log(this.valor+(this.destino));
    console.log('Solicitada Nova Transferencia');
    if(this.ehValido()){
      const valorEmitir = {valor: this.valor, destino: this.destino}
      this.aoTransferir.emit(valorEmitir);
    }
    this.limparCampos();
  }
  private  ehValido() {
    const valido = this.valor >= 0;
    if (!valido) {
        this.valoresComErro.emit('Informe um valor válido');
    }else{
      this.valoresComErro.emit(' ');
    }

    return valido;
}
  limparCampos(){
    this.valor=0;
    this.destino=0;
  }
}
