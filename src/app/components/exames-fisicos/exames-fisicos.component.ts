import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamesFisicosService } from 'src/app/services/exames-fisicos.service';


@Component({
  selector: 'app-exames-fisicos',
  templateUrl: './exames-fisicos.component.html',
  styleUrls: ['./exames-fisicos.component.css']
})
export class ExamesFisicosComponent implements OnInit {

  @Input() examesFisicoslist: any[] = [];

  @Output() examesFisicosChange = new EventEmitter<any[]>();

  constructor(
    private examesFisicosService: ExamesFisicosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCasoClinico = +params.get('idCasoClinico');
      // o idCasoClinico disponível para usar na lógica do  componente
    });
  }

  adicionarExame(): void {
    this.examesFisicoslist.push({examesFisicosCorretoDTO: '', examesFisicosIncorretoDTO: ''});
    this.emitirAlteracoes();
  }

  removerExame(index: number): void {
    this.examesFisicoslist.splice(index, 1);
    this.emitirAlteracoes();
  }

  private emitirAlteracoes(): void {
    this.examesFisicosChange.emit(this.examesFisicoslist);
  }

  criarExamesParaCasoClinicoReceiver(): void {
    this.route.paramMap.subscribe((params) => {
      const idCasoClinico = +params.get('idCasoClinico');
  
      const examesFisicosArray = this.examesFisicoslist.map(exame => ({
        examesFisicosCorretoDTO: exame.examesFisicosCorretoDTO,
        examesFisicosIncorretoDTO: exame.examesFisicosIncorretoDTO
      }));
  
      this.examesFisicosService.create(examesFisicosArray, idCasoClinico).subscribe(
        (examesFisicosCriados) => {
          console.log('Exames físicos criados com sucesso!', examesFisicosCriados);
        },
        (error) => {
          console.error('Erro ao criar exames físicos:', error);
        }
      );
    });
  }


  criarExamesParaCasoClinico(examesFisicosArray: any[], idCasoClinico: number): void {
    examesFisicosArray.forEach((exameFisico) => {
      this.examesFisicosService.create(exameFisico, idCasoClinico).subscribe(
        () => {
          console.log('Exame físico criado com sucesso!');

        },
        (error) => {
          console.error('Erro ao criar exame físico:', error);
        }
      );
    });
  }
  


}
