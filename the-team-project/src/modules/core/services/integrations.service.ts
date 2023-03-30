import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Integration } from '../../../types';
import { environment } from '../../../environments/environment';

@Injectable()
export class IntegrationsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Integration[]> {
    return this.http.get<Integration[]>(`${this.apiUrl}/integrations`);
  }
}
