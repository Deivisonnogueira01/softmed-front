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

  casoClinico: CasoClinico | null = null;
  hipoteseDiagnostica: Patologia = Patologia.AMIGDALITE_AGUDA;

  opcoesDiagnostico: Patologia[] = [];
  bloquearProximaEtapa = true; // Inicializado como verdadeiro
  mostrarDialogo = false;

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
    const patologias = [...Object.values(Patologia)];
    const index = patologias.indexOf(this.casoClinico?.patologia);
    if (index !== -1) {
      patologias.splice(index, 1);
    }

    for (let i = patologias.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [patologias[i], patologias[j]] = [patologias[j], patologias[i]];
    }

    const posicaoCorreta = Math.floor(Math.random() * 5);
    patologias.splice(posicaoCorreta, 0, this.casoClinico?.patologia);

    this.opcoesDiagnostico = patologias.slice(0, 5);
  }

  avaliarHipoteseDiagnostica(): void {
    if (this.hipoteseDiagnostica === this.casoClinico?.patologia) {
      this.toast.success('Hipótese correta!');
      this.bloquearProximaEtapa = false; // Desbloqueia o botão após avaliação correta
    } else {
      this.toast.error('Hipótese incorreta. Tente novamente.');
      this.router.navigate([`/casos-clinicos/view/${this.casoClinico.casoClinicoId}`]);
    }
  }

 
  navegarProximaEtapa(): void {
    if (!this.bloquearProximaEtapa) {
   
      
    }
  }

  abrirDialogo(): void {
    this.mostrarDialogo = true;
  }

  avaliar(avaliacao: string): void {
    this.router.navigate(['/home']);
    this.toast.info("Avaliação Finalizada")
  }
}


