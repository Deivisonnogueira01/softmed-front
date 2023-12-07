import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamesSoroLab } from 'src/app/model/exames-soro-lab';
import { CasoClinicoService } from 'src/app/services/caso-clinico.service';

@Component({
  selector: 'app-hipotese-exames-soro',
  templateUrl: './hipotese-exames-soro.component.html',
  styleUrls: ['./hipotese-exames-soro.component.css']
})
export class HipoteseExamesSoroComponent implements OnInit {

 
  casoClinicoId: number | null = null;
  exames: ExamesSoroLab[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private casoService: CasoClinicoService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const casoClinicoId = params.get('id');
      if (casoClinicoId) {
        this.casoClinicoId = parseInt(casoClinicoId, 10);
     //   this.casoService.getExamesSoroLab(casoClinicoId).subscribe((exames) => {
       //   this.exames = exames;
        //});
      }
    });
  }

  avaliarExamesSelecionados(): void {
    const examesSelecionados = this.exames.filter((exame) => exame.examesSoroDTOCorreto);

    const todosCorretos = examesSelecionados.every((exame) => exame.examesSoroDTOCorreto);
    if (todosCorretos) {
      this.toast.success('Todos os exames corretos foram selecionados!');
    } else {
      this.toast.error('Alguns exames incorretos foram selecionados. Tente novamente.');
    }
    // Avance para a próxima etapa ou ação necessária
  }

  // Método para navegar para a próxima etapa
  navegarProximaEtapa(): void {
    // Implemente a lógica para navegar para a próxima etapa ou componente, se necessário
    // Exemplo: this.router.navigate(['proximo-componente', { casoClinicoId: this.casoClinicoId }]);
  }
}

