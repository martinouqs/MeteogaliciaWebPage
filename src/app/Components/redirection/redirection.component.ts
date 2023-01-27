import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.css']
})
export class RedirectionComponent implements OnDestroy, OnInit{

  dtTrigger = new Subject();
  listDatosDiarios: any;
  listaEstacions:any;
  dtOptions: DataTables.Settings = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://servizos.meteogalicia.gal/mgrss/observacion/datosDiariosEstacionsMeteo.action?idEst=10124').subscribe((res: any)=>{
      this.listDatosDiarios = res.listDatosDiarios;
      this.listaEstacions = res.listaEstacions;
      this.dtTrigger.next;
    });
  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
