import { Pipe, PipeTransform } from '@angular/core';
import { IEvento } from '../interfaces/interface.eventos';

@Pipe({
    name: 'sublista'
})
export class SubLista implements PipeTransform {
    transform(eventos: IEvento[], input: string) : IEvento[] {
            //usando arrow function (similar a delegates do c#)
            return eventos.filter(
                evento =>
    evento.descricao.toLowerCase().includes(input.toLowerCase()));
    }
}