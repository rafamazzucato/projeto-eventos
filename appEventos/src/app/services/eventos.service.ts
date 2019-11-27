import { Injectable } from '@angular/core';
import { IEvento } from '../interfaces/interface.eventos'
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const localUrl = 'assets/data/eventos.json';

@Injectable()
export class EventosService {

    //acesso ao HTTP
public constructor(private http: HttpClient) { }
    
    getEventosWS() : Observable<HttpResponse<IEvento[]>> {
        return this.http.get<IEvento[]>(
            localUrl, { observe: 'response' });
    }
}