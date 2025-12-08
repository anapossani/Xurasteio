import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OraculoResponse } from '../models/oraculo.dto';

@Injectable({
  providedIn: 'root'
})
export class OraculoService {
  private apiUrl = '/api/oraculo'; 
  constructor(private http: HttpClient) {}
  consultarDestino(pergunta: string): Observable<OraculoResponse> {
  
    return this.http.post<any>(this.apiUrl, { pergunta });
  }
}