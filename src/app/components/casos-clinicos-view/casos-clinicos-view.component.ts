import { Form, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CasoClinico } from 'src/app/model/caso-clinico';
import { CasoClinicoService } from 'src/app/services/caso-clinico.service';
import { Especialidade } from 'src/app/enums/especialidade';
import { Patologia } from 'src/app/enums/patologia';
import { ExamesSoroLab } from 'src/app/model/exames-soro-lab';
import { ExamesImagem } from 'src/app/model/exames-imagem';
import { ExamesFisicos } from 'src/app/model/exames-fisicos';
import { TestesFarmacologicos } from 'src/app/model/testes-farmacologicos';

@Component({
  selector: 'app-casos-clinicos-view',
  templateUrl: './casos-clinicos-view.component.html',
  styleUrls: ['./casos-clinicos-view.component.css']
})
export class CasosClinicosViewComponent implements OnInit {

  examesSoroLab: ExamesSoroLab[] = [];
  examesImagem: ExamesImagem[] = [];
  examesFisicos: ExamesFisicos[] = [];
  examesTesteFarma: TestesFarmacologicos[] = [];

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
    especialidade: Especialidade.CLINICA_MEDICA,
    tipoEspecialidade: Especialidade.CLINICA_MEDICA,
    patologia: Patologia.ACIDOSE,
    examesSoroLab: [],
    examesImagem:  [],
    examesFisicos: [],
    examesTestesFarma: [],
  }

  
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
  tipoEspecialidade: FormControl = new FormControl(null);


  constructor(
    private service: CasoClinicoService,
    private toastService: ToastrService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.casoClinico.casoClinicoId = this.route.snapshot.paramMap.get("casoClinicoId")
    this.findById();
  }

  findById(): void {
    this.service.findById(this.casoClinico.casoClinicoId).subscribe(resposta => {
      this.casoClinico = resposta;
    }, ex => {
      this.toastService.error(ex.error.error);
    })
  }

  //this.toastService.success('Caso Clinico Finalizado Com Sucesso');
  finalizar(): void {
    this.router.navigate(['hipotese-diagnostica']);
  }
}
