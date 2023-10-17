import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CasoClinico } from 'src/app/model/caso-clinico';
import { CasoClinicoService } from 'src/app/services/caso-clinico.service';

@Component({
  selector: 'app-caso-clinicos-list',
  templateUrl: './caso-clinicos-list.component.html',
  styleUrls: ['./caso-clinicos-list.component.css']
})
export class CasoClinicosListComponent implements OnInit {

  ELEMENT_DATA: CasoClinico[] = []

  casoClinico: CasoClinico = {

    casoClinicoId: 0,
    numero: 0,
    nomePaciente: '',
    idadePaciente: 0,
    alturaPaciente: 0,
    pesoPaciente: 0,
    sexoPaciente: '',
    corPaciente: '',
    profissaoPaciente: '',
    religiaoPaciente: '',
    naturalPaciente: '',
    residentePaciente: '',
    historiaDoencaAtual: '',
    queixaPrincipal: '',
    interrogatorioDiversosAparelhos: '',
    historiaPatologicaPregressa: '',
    historiaFamiliar: '',
    historiaPsicossocial: '',
    tipoEspecialidade: '',
    patologia: ''

  }

  displayedColumns: string[] = ['numero', 'tipoEspecialidade', 'acoes'];
  dataSource = new MatTableDataSource<CasoClinico>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  
  constructor(
    private service: CasoClinicoService,
    private toastService: ToastrService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.findByEspecialidade('CLINICA_MEDICA');
  }

  findByEspecialidade(especialidade: string) : void {
    this.service.findByEspecialidade(especialidade).subscribe(
      response => {
        this.ELEMENT_DATA = response;
        this.dataSource = new MatTableDataSource<CasoClinico>(response);
        this.dataSource.paginator = this.paginator;
      },
      error => {
        console.log(error);
      }
    );
    
  }

  applyFilter(event: Event){
    const filterValue = (event.target as HTMLInputElement)
    this.dataSource.filter = filterValue.value.trim().toLowerCase()
  }

}
