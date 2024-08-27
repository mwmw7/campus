import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExhibitionService {
  private apiUrl = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}


}

export class ExhibitionserviceService {
}
