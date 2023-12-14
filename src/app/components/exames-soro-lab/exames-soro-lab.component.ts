import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamesImagemService } from 'src/app/services/exames-imagem.service';
import { ExamesSoroLabService } from 'src/app/services/exames-soro-lab.service';

@Component({
  selector: 'app-exames-soro-lab',
  templateUrl: './exames-soro-lab.component.html',
  styleUrls: ['./exames-soro-lab.component.css']
})
export class ExamesSoroLabComponent implements OnInit {

  @Input() examesSoroLabList: any[] = [];

  @Output() examesSoroLabChange = new EventEmitter<any[]>();

  constructor(
    private service: ExamesSoroLabService,
    private route: ActivatedRoute,
    private router: Router,
    private toast: ToastrService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCasoClinico = +params.get('idCasoClinico');
      // o idCasoClinico disponível para usar na lógica do  componente
    });
  }

  adicionarExame(): void {
    this.examesSoroLabList.push({examesSoroDTOCorreto: '', examesSoroDTOIncorreto: ''});
    this.emitirAlteracoes();
  }

  removerExame(index: number): void {
    this.examesSoroLabList.splice(index, 1);
    this.emitirAlteracoes();
  }

  private emitirAlteracoes(): void {
    this.examesSoroLabChange.emit(this.examesSoroLabList);
  }

  criarExamesParaCasoClinicoReceiver(): void {
    this.route.paramMap.subscribe((params) => {
      const idCasoClinico = +params.get('idCasoClinico');
  
      const examesSoroArray = this.examesSoroLabList.map(exame => ({
        examesSoroDTOCorreto: exame.examesSoroDTOCorreto,
        examesSoroDTOIncorreto: exame.examesSoroDTOIncorreto
      }));
  
      this.service.create(examesSoroArray, idCasoClinico).subscribe(
        (examesSoroCriado) => {
          console.log('Exames Soro Lab criados com sucesso!', examesSoroCriado);
          this.toast.success('Exames Sorológicos Laboratoriais Cadastrados com Sucesso', 'Cadastro');
          this.router.navigate(['create-exame-imagem/', idCasoClinico]);

        },
        (error) => {
          console.error('Erro ao criar exames Soro Lab:', error);
        }
      );
    });
  }
  
}
