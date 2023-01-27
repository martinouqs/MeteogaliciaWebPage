import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Config } from 'datatables.net';

@Injectable()
export class ConfigService {

  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }

  getConfig() {
    return this.http.get<Config>(this.configUrl);
  }
  
}
