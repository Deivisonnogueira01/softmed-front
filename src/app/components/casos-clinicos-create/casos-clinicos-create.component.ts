import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especialidade } from 'src/app/enums/especialidade';
import { Patologia } from 'src/app/enums/patologia';
import { CasoClinico } from 'src/app/model/caso-clinico';
import { CasoClinicoService } from 'src/app/services/caso-clinico.service';

@Component({
  selector: 'app-casos-clinicos-create',
  templateUrl: './casos-clinicos-create.component.html',
  styleUrls: ['./casos-clinicos-create.component.css']
})
export class CasosClinicosCreateComponent implements OnInit {


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

  }

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
  patologia: FormControl = new FormControl(null);

  especialidades: string[] = Object.values(Especialidade);
  selectedEspecialidade: any;

  patologias: string[] = Object.values(Patologia);
  selectedPatologia: any;

  constructor(
    private service: CasoClinicoService,
    private toast: ToastrService,
    private router: Router,

  ) {

  }

  ngOnInit(): void {
  }

  onInputChange(event: any): void {
    const inputValue = event.target.value;
    // Filtra caracteres não numéricos usando uma expressão regular
    this.casoClinico.pesoPaciente = inputValue.replace(/[^0-9]/g, '');
  }

  onInputChangeAltura(event: any): void {
    const inputValue = event.target.value;
    this.casoClinico.alturaPaciente = inputValue.replace(/[^0-9]/g, '');
  }

  onInputChangeNumero(event: any): void {
    const inputValue = event.target.value;
    this.casoClinico.numero = inputValue.replace(/[^0-9]/g, '');
  }

  create(): void {
    this.casoClinico.especialidade = this.selectedEspecialidade;
    this.casoClinico.tipoEspecialidade = this.selectedEspecialidade;
    this.casoClinico.patologia = this.selectedPatologia;
    this.service.create(this.casoClinico).subscribe(() => {
      this.toast.success('Caso Clinico cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['home'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.forEach(element => {
          this.toast.error('Erro ao Cadastrar Caso Clinico');
        });
      } else {
        this.toast.error(ex.error.message);
        this.toast.error('Usuário Não tem Acesso a essa Função!');
      }
    })
  }

  validaCampos(): boolean {
    return this.queixaPrincipal.valid
      && this.tipoEspecialidade.valid && this.numero.valid
  }

}
