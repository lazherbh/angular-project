import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class OffreService {
  private apiUrl = 'http://localhost:8080/api/responsable-rh/offres';
 
  constructor(private http: HttpClient) { }

getOffres(): Observable<any>{
  return this.http.get<any>(this.apiUrl)
}

getOneOffre(id :string): Observable<any>{
  const url = `${this.apiUrl}/${id}`;
  return this.http.get<any>(url);
}
}