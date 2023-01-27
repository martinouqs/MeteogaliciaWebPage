import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnDestroy, OnInit {
  searchText:any;
  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  listaEstacionsMeteo: any;
  actualPage: number = 1;
  orderHeader: String = '';
  isDescOrder: boolean = true;

  constructor(private http: HttpClient) { }

    ngOnInit(): void {
      this.http.get('https://servizos.meteogalicia.gal/mgrss/observacion/listaEstacionsMeteo.action').subscribe((res: any)=>{
        this.listaEstacionsMeteo = res.listaEstacionsMeteo;
        this.dtTrigger.next;
      });
    }

    sort(headerName:String){
      this.orderHeader = headerName;
      this.isDescOrder = !this.isDescOrder;
    }

    ngOnDestroy(): void {
      this.dtTrigger.unsubscribe();
    }
}
