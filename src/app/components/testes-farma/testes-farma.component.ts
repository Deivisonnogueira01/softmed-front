import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { TestesFarmaService } from 'src/app/services/testes-farma.service';

@Component({
  selector: 'app-testes-farma',
  templateUrl: './testes-farma.component.html',
  styleUrls: ['./testes-farma.component.css']
})
export class TestesFarmaComponent implements OnInit {

  @Input() testeFarmaList: any[] = [];

  @Output() testesFarmaChange = new EventEmitter<any[]>();

  constructor(
    private service: TestesFarmaService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCasoClinico = +params.get('idCasoClinico');
      // o idCasoClinico disponível para usar na lógica do  componente
    });
  }


  adicionarExame(): void {
    this.testeFarmaList.push({testesFarmaDTOCorreto: '', testesFarmaDTOIncorreto: ''});
    this.emitirAlteracoes();
  }

  removerExame(index: number): void {
    this.testeFarmaList.splice(index, 1);
    this.emitirAlteracoes();
  }

  private emitirAlteracoes(): void {
    this.testesFarmaChange.emit(this.testeFarmaList);
  }

  criarExamesParaCasoClinicoReceiver(): void {
    this.route.paramMap.subscribe((params) => {
      const idCasoClinico = +params.get('idCasoClinico');
  
      const testeFarmaArray = this.testeFarmaList.map(exame => ({
        testesFarmaDTOCorreto: exame.testesFarmaDTOCorreto,
        testesFarmaDTOIncorreto: exame.testesFarmaDTOIncorreto
      }));
  
      this.service.create(testeFarmaArray, idCasoClinico).subscribe(
        (testeFarmaCriado) => {
          console.log('Testes Farmacologicos criados com sucesso!', testeFarmaCriado);
          this.toast.success('Testes Farmacológicos Cadastrados com Sucesso', 'Cadastro');
        },
        (error) => {
          console.error('Erro ao criar Teste Farmacologico:', error);
        }
      );
    });
  }


}
