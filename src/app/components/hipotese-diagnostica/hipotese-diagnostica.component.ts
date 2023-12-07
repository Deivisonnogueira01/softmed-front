import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patologia } from 'src/app/enums/patologia';
import { CasoClinico } from 'src/app/model/caso-clinico';
import { CasoClinicoService } from 'src/app/services/caso-clinico.service';

@Component({
  selector: 'app-hipotese-diagnostica',
  templateUrl: './hipotese-diagnostica.component.html',
  styleUrls: ['./hipotese-diagnostica.component.css']
})
export class HipoteseDiagnosticaComponent implements OnInit {

  casoClinico: CasoClinico | null = null; // Inicializado como null ou com um objeto padrão, conforme necessário
  hipoteseDiagnostica: Patologia = Patologia.AMIGDALITE_AGUDA; // Inicializado com uma hipótese padrão ou vazia


  opcoesDiagnostico: Patologia[] = [];

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toast: ToastrService,
    private casoService: CasoClinicoService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const casoClinicoId = params.get('id');
      if (casoClinicoId) {
        this.casoService.findById(casoClinicoId).subscribe((casoClinico) => {
          this.casoClinico = casoClinico;
          this.hipoteseDiagnostica = null;
          this.embaralharOpcoesDiagnostico();
        });
      }
    });
  }

  embaralharOpcoesDiagnostico(): void {
    // Crie uma cópia do enum para não alterar a ordem original
    const patologias = [...Object.values(Patologia)];
  
    // Remova a patologia correta, se estiver presente
    const index = patologias.indexOf(this.casoClinico?.patologia);
    if (index !== -1) {
      patologias.splice(index, 1);
    }
  
    // Embaralhe a ordem usando o algoritmo de Fisher-Yates
    for (let i = patologias.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [patologias[i], patologias[j]] = [patologias[j], patologias[i]];
    }
  
    // Adicione a patologia correta à lista de opções em uma posição aleatória
    const posicaoCorreta = Math.floor(Math.random() * 5);
    patologias.splice(posicaoCorreta, 0, this.casoClinico?.patologia);
  
    // Selecione as primeiras 5 patologias (ou quantas desejar)
    this.opcoesDiagnostico = patologias.slice(0, 5);
  }
  
  


  avaliarHipoteseDiagnostica(): void {
    if (this.hipoteseDiagnostica === this.casoClinico?.patologia) {
      this.toast.success('Hipótese correta!');
    } else {
      this.toast.error('Hipótese incorreta. Tente novamente.');
      this.router.navigate([`/casos-clinicos/view/${this.casoClinico.casoClinicoId}`]);

    
    }
  }


  // Método para navegar para a próxima etapa
  navegarProximaEtapa(): void {
    // Aqui você pode implementar a lógica de navegação para a próxima etapa ou componente
    // Exemplo: this.router.navigate(['proximo-componente', { casoClinico: JSON.stringify(this.casoClinico) }]);
  }
}







