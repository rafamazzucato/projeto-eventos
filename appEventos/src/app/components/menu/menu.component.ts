import { Component } from '@angular/core';

@Component({
    selector: 'menu',
    templateUrl: 'menu.component.html'
})
export class MenuComponent {
    titulo_empresa: string = "Impacta Treinamentos";
    titulo_home: string = "Home";
    titulo_principal: string = "Gestão de Eventos";
}