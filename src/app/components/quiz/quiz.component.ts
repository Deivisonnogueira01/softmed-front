import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  repository: string | any[];

  verificarRespostas() {
    let acertos = 0;
    for (let pergunta of this.repository) {
      const respostaSelecionada = ''
   //   const respostaSelecionada = document.querySelector(`input[name="${pergunta.repository}"]:checked`).value;
      if (respostaSelecionada === pergunta.resposta) {
        acertos++;
      }
    }
    alert(`Você acertou ${acertos} de ${this.repository.length} perguntas.`);
  }

}






