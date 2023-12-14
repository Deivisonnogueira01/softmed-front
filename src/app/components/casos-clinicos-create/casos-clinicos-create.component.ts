import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Especialidade } from 'src/app/enums/especialidade';
import { Patologia } from 'src/app/enums/patologia';
import { CasoClinico } from 'src/app/model/caso-clinico';
import { ExamesFisicos } from 'src/app/model/exames-fisicos';
import { ExamesImagem } from 'src/app/model/exames-imagem';
import { TestesFarmacologicos } from 'src/app/model/testes-farmacologicos';
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
    condutaTerapeutica: '',
    especialidade: Especialidade.CLINICA_MEDICA,
    tipoEspecialidade: Especialidade.CLINICA_MEDICA,
    patologia: Patologia.ACIDOSE,
    examesSoroLab: [],
    examesImagem: [],
    examesFisicos: [],
    examesTestesFarma :[]
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
  condutaTerapeutica: FormControl = new FormControl(null);
  tipoEspecialidade: FormControl = new FormControl(null);
  patologia: FormControl = new FormControl(null);

  especialidades: string[] = Object.values(Especialidade);
  selectedEspecialidade: any;

  patologias: string[] = Object.values(Patologia);
  selectedPatologia: any;

  examesSoroLabCorretosForm: any[] = [];
  examesSoroLabIncorretosForm: any[] = [];
  examesImagemForm: ExamesImagem[] = Object.values(ExamesImagem);
  examesFisicosForm: ExamesFisicos[] = Object.values(ExamesFisicos);
  examesTesteFarmaForm: TestesFarmacologicos[] = Object.values(TestesFarmacologicos);

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
    this.casoClinico.examesSoroLab = this.examesSoroLabCorretosForm;
  
    this.service.create(this.casoClinico).subscribe(
      (casoClinicoCriado) => {
        const idCasoClinico = casoClinicoCriado.casoClinicoId;
  
        this.toast.success('Caso Clinico cadastrado com sucesso', 'Cadastro');
        
        // Passando o ID para a rota de exames
        this.router.navigate(['create-exame-fisico/', idCasoClinico]);
      },
      (ex) => {
        if (ex.error.errors) {
          ex.error.errors.forEach((element) => {
            this.toast.error('Erro ao Cadastrar Caso Clinico');
          });
        } else {
          this.toast.error(ex.error.message);
          this.toast.error('Usuário Não tem Acesso a essa Função!');
        }
      }
    );
  }
  

  validaCampos(): boolean {
    return this.queixaPrincipal.valid
      && this.tipoEspecialidade.valid && this.numero.valid
      
  }

}
