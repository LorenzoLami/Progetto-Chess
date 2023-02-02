import { Component } from '@angular/core';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent {
  formRicerca:any = {
    gBianco: null,
    gNero: null,
    dataPartita: null,
    luogoPartita: null,
    evento: null,
    numeroRound: null,
    risultato: null,
    listaMosse: null
  }

  onSubmit(): void {
    /*
      Per copia/incolla:

      formRicerca.gBianco
      formRicerca.gNero
      formRicerca.dataPartita
      formRicerca.luogoPartita
      formRicerca.evento
      formRicerca.numeroRound
      formRicerca.risultato
      formRicerca.listaMosse
    */
      
      console.log(this.formRicerca);
      //Bisogna fare la post all'url per la ricerca, per triggerare il mapping backEnd
  }
}
