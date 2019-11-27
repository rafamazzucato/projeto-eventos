import { Component } from '@angular/core'
import { IEvento } from '../../interfaces/interface.eventos'
import { EventosService } from '../../services/eventos.service'

@Component({
     templateUrl:'cadastro.component.html'
})
export class CadastroComponent { 
     public listaEventos: IEvento[];
     public eventoSelecionado: IEvento;
     private novoEvento: IEvento;
         //para a inclusão de um novo evento
     public novo() {
          this.novoEvento = { descricao: '', data:'',preco:0 }
          this.eventoSelecionado = this.novoEvento;
     }
     
     public incluir(evento: IEvento) {
          this.listaEventos.push(evento);
          alert('Evento incluído com sucesso');
     }
     
     public selecionar(item: IEvento): void {
          this.eventoSelecionado = item;
     }
     constructor(eventosService: EventosService) {
          this.listaEventos = []
          eventosService.getEventosWS()
          .subscribe(resp => {
          console.log(resp);
          const result = new Array()
          for (const data of resp.body) {
               result.push(data);
          }
          this.listaEventos = result
          });
     }
}