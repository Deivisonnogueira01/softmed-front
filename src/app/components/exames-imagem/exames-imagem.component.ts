import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamesImagemService } from 'src/app/services/exames-imagem.service';

@Component({
  selector: 'app-exames-imagem',
  templateUrl: './exames-imagem.component.html',
  styleUrls: ['./exames-imagem.component.css']
})
export class ExamesImagemComponent implements OnInit {

  @Input() examesImagemList: any[] = [];

  @Output() examesImagemChange = new EventEmitter<any[]>();

  constructor(
    private service: ExamesImagemService,
    private route: ActivatedRoute,
    private toast: ToastrService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const idCasoClinico = +params.get('idCasoClinico');
      // o idCasoClinico disponível para usar na lógica do  componente
  });

}

adicionarExame(): void {
  this.examesImagemList.push({examesImagemCorreto: '', exameImagemIncorretos: ''});
  this.emitirAlteracoes();
}

removerExame(index: number): void {
  this.examesImagemList.splice(index, 1);
  this.emitirAlteracoes();
}

private emitirAlteracoes(): void {
  this.examesImagemChange.emit(this.examesImagemList);
}

criarExamesParaCasoClinicoReceiver(): void {
  this.route.paramMap.subscribe((params) => {
    const idCasoClinico = +params.get('idCasoClinico');

    const examesImagemArray = this.examesImagemList.map(exame => ({
      examesImagemCorreto: exame.examesImagemCorreto,
      exameImagemIncorretos: exame.exameImagemIncorretos
    }));

    this.service.create(examesImagemArray, idCasoClinico).subscribe(
      (examesImagemCriado) => {
        console.log('Exames de Imagems criados com sucesso!', examesImagemCriado);
        this.toast.success('Exames de Imagem Cadastrados com Sucesso', 'Cadastro');
        this.router.navigate(['create-teste-farma/', idCasoClinico]);

      },
      (error) => {
        console.error('Erro ao criar exames de Imagem:', error);
      }
    );
  });

}


criarExamesParaCasoClinico(examesImagemArray: any[], idCasoClinico: number): void {
  examesImagemArray.forEach((exameImagem) => {
    this.service.create(exameImagem, idCasoClinico).subscribe(
      () => {
        console.log('Exame Imagem criado com sucesso!');

      },
      (error) => {
        console.error('Erro ao criar exame de Imagem:', error);
      }
    );
  });
}

}
