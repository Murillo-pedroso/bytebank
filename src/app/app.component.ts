import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencia: any;
  valoresComErro: String | undefined;
  transferir($event: any){
    console.log($event);
    this.transferencia = $event;
  }
  ehValido($event:String){
    console.log($event);
    this.valoresComErro = $event;

  }
}
