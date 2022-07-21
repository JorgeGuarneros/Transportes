import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Prueba } from '../interface/prueba';

@Injectable({
  providedIn: 'root'
})
export class TransporteService {

  constructor(private http: HttpClient) { }


  //------Get Transporte
  getTransporte():Observable<Transporte[]>{
    return this.http.get<Transporte[]>(environment.apiurl + "/api/db");
  }


  //------Get un Transporte
  getUnTransporte(id:string):Observable<any>{
    return this.http.get<any>(environment.apiurl +"/api/db/"+id);
  }


  //----------Agregar
  addTransporte(transporte:Transporte):Observable<Transporte>{
  return this.http.post<Transporte>(environment.apiurl + '/api/db/', transporte);
  }


  //------------Eliminar
  deleteTransporte(id:string):Observable<Transporte>{
    return this.http.delete<Transporte>(environment.apiurl + '/api/db/' + id);
    }


  //----------Modificar
  editTransporte(id:string, transporte:Transporte):Observable<Transporte>{
    return this.http.put<Transporte>(environment.apiurl + '/api/db/',id + transporte );
    }

}

export interface Transporte{
  id_transporte:string;
  transporte?:string;
  placas?:string;
}