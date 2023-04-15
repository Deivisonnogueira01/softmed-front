import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { CasoClinico } from 'src/app/model/caso-clinico';
import { CasoClinicoService } from 'src/app/services/caso-clinico.service';

@Component({
  selector: 'app-caso-clinicos-list',
  templateUrl: './caso-clinicos-list.component.html',
  styleUrls: ['./caso-clinicos-list.component.css']
})
export class CasoClinicosListComponent implements OnInit {

  ELEMENT_DATA: CasoClinico[] = []


  displayedColumns: string[] = ['casoClinicoId', 'numero', 'tipoEspecialidade', 'acoes'];
  dataSource = new MatTableDataSource<CasoClinico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  valorFiltrado: CasoClinico
  @Output() filtrar = new EventEmitter<CasoClinico>();
  
  constructor(
    private service: CasoClinicoService
  ) { }

  ngOnInit(): void {
    this.findAll()
  }

  findAll(): void{
    this.service.findAll().subscribe(resposta => {
        this.ELEMENT_DATA = resposta;
        this.dataSource = new MatTableDataSource<CasoClinico>(resposta);
        this.dataSource.paginator = this.paginator;
      })
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement)
    this.dataSource.filter = filterValue.value.trim().toLowerCase()
  }

}
