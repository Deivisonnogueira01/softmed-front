import { Component, OnInit } from '@angular/core';
import { CasoClinico } from 'src/app/model/caso-clinico';
import { ExamesFisicos } from 'src/app/model/exames-fisicos';
import { ExamesImagem } from 'src/app/model/exames-imagem';
import { CasoClinicoService } from 'src/app/services/caso-clinico.service';
import { ExamesFisicosService } from 'src/app/services/exames-fisicos.service';

@Component({
  selector: 'app-exames-fisicos',
  templateUrl: './exames-fisicos.component.html',
  styleUrls: ['./exames-fisicos.component.css']
})
export class ExamesFisicosComponent implements OnInit {

  constructor(
    private casoClinicoService: CasoClinicoService,
    private examesFisicos: ExamesFisicosService
  ) {}

  ngOnInit(): void {
  }

  criarExamesParaCasoClinico(examesImagem: ExamesFisicos, casoClinicoId: number): void {
    // Primeiro, você pode buscar o caso clínico se precisar de informações adicionais
    this.casoClinicoService.findById(casoClinicoId).subscribe((casoClinico: CasoClinico) => {
      // Agora você pode associar o caso clínico aos exames e criar os exames
      examesImagem.idCasoClinico = casoClinico.casoClinicoId; //
      this.examesFisicos.create(examesImagem, casoClinicoId).subscribe(() => {
        console.log('Exames criados com sucesso!');
      }, error => {
        console.error('Erro ao criar exames:', error);
      });
    }, error => {
      console.error('Erro ao buscar caso clínico:', error);
    });
  }

}
