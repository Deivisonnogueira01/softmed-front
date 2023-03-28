import { Form, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CasoClinico } from 'src/app/model/caso-clinico';
import { CasoClinicoService } from 'src/app/services/caso-clinico.service';

@Component({
  selector: 'app-casos-clinicos-view',
  templateUrl: './casos-clinicos-view.component.html',
  styleUrls: ['./casos-clinicos-view.component.css']
})
export class CasosClinicosViewComponent implements OnInit {

  casoClinico: CasoClinico = {

    casoClinicoId: '',
    numero: 0,
    nomePaciente: '',
    idadePaciente: '',
    alturaPaciente: '',
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
    especialidades: []

  }

  casosClinicos: CasoClinico[] = []

  casoClinicoId: FormControl = new FormControl(null);
  numero: FormControl = new FormControl(null);
  nomePaciente: FormControl = new FormControl(null);
  idadePaciente: FormControl = new FormControl(null);
  alturaPaciente: FormControl = new FormControl(null);
  pesoPaciente: FormControl = new FormControl(null);
  sexoPaciente: FormControl = new FormControl(null);
  corPaciente: FormControl = new FormControl(null);
  profissaoPaciente: FormControl = new FormControl(null);
  religiaoPaciente: FormControl = new FormControl(null);
  naturalPaciente: FormControl = new FormControl(null);
  residentePaciente: FormControl = new FormControl(null);
  historiaDoencaAtual: FormControl = new FormControl(null);
  queixaPrincipal: FormControl = new FormControl(null);
  interrogatorioDiversosAparelhos: FormControl = new FormControl(null);
  historiaPatologicaPregressa: FormControl = new FormControl(null);
  historiaFamiliar: FormControl = new FormControl(null);
  historiaPsicossocial: FormControl = new FormControl(null);
  especialidades: []


  constructor(
    private service: CasoClinicoService,
    private toastService: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // chamar algum caso 
  }

  finalizar(): void {
    this.toastService.success('Caso Clinico Finalizado Com Sucesso');
    this.router.navigate(['caso-clinicos-list']);
    //home
  }



  /*
  findAllTecnicos(): void {
    this.tecnicoService.findAll().subscribe(resposta => {
      this.tecnicos = resposta;
    })
  }*/




}
