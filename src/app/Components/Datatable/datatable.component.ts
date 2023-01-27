import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnDestroy, OnInit {
  rows = [];
  temp = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  listaEstacionsMeteo: any;


  constructor(private http: HttpClient) { }

    ngOnInit(): void {
      this.dtOptions = {
        pagingType: 'full_numbers',
        pageLength: 8
      };
      this.http.get('https://servizos.meteogalicia.gal/mgrss/observacion/listaEstacionsMeteo.action').subscribe((res: any)=>{
        this.listaEstacionsMeteo = res.listaEstacionsMeteo;
        this.dtTrigger.next; //AÑADIR () AO NEXT
      });
    }

    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }

}
